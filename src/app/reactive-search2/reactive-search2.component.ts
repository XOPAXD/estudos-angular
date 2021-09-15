import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-reactive-search2',
  templateUrl: './reactive-search2.component.html',
  styleUrls: ['./reactive-search2.component.scss']
})
export class ReactiveSearch2Component implements OnInit {

  queryFiled = new FormControl();
  readonly SEARCH_URL = "https://api.cdnjs.com/libraries?";
  readonly fields = "fields=name,description,version";
  total: number;
  results: Observable<any>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.results = this.queryFiled.valueChanges.pipe(
      map((value) => value.trim()),
      filter((value) => value.length > 1),
      debounceTime(200),
      distinctUntilChanged(),
      tap((value) => console.log(value)),
      switchMap((value) =>
        this.http.get(this.SEARCH_URL, {
          params: {
            search: value,
            fields: this.fields,
          },
        })
      ),
      tap((res: any) => (this.total = res.total)),
      map((res: any) =>  res.results)
    );
  }

  onSearch() {
    let value = this.queryFiled.value;
    let fields = this.fields;

    const params = {
      search: value,
      fields: fields,
    };

    if (value && (value = value.trim()) !== "") {
      this.results = this.http.get(this.SEARCH_URL, { params }).pipe(
        tap((res: any) => (this.total = res.total)),
        map((res: any) => res.results)
      );
    }
  }
}
