import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatDialog, MatPaginator, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { ComponentModalComponent } from '../component-modal/component-modal.component';
import {
  tap,
  map,
  filter,
  distinctUntilChanged,
  debounceTime,
  switchMap,
} from "rxjs/operators";

export interface PeriodicElement {
  name: string;
  version: number;
}

@Component({
  selector: "app-reactive-search",
  templateUrl: "./reactive-search.component.html",
  styleUrls: ["./reactive-search.component.scss"],
})
export class ReactiveSearchComponent implements OnInit {
  queryFiled = new FormControl();
  readonly SEARCH_URL =
    "https://api.cdnjs.com/libraries?fields=name,description,version";
  readonly fields = "fields=name,description,version";
  total: number;
  results: Observable<any>;
  data: any = [];
  resultsLength = 0;

  displayedColumns: string[] = ["name", "version","actions"];
  dataSource = new MatTableDataSource(this.data);
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private http: HttpClient, private router: Router,public dialog: MatDialog) {}

  ngOnInit() {
    this.http.get(this.SEARCH_URL).subscribe((res) => {
      this.data = res;
      console.log("axxxqui  " + JSON.stringify(this.data));
      this.dataSource = new MatTableDataSource(this.data.results);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  novo() {
    this.router.navigate(["formulario"]);
  }
  visualizar(){
    this.dialog.open(ComponentModalComponent);
  }
}
