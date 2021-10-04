import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { Quadrinhos } from '../models/Quadrinhos';
import { QuadrinhosService } from '../services/quadrinhos.service';

@Component({
  selector: 'app-quadrinhos',
  templateUrl: './quadrinhos.component.html',
  styleUrls: ['./quadrinhos.component.scss']
})
export class QuadrinhosComponent implements OnInit {

  p: number = 1;
  quadrinhos: Quadrinhos[] = [];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(private router: Router,private service: QuadrinhosService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.quadrinhos = resposta;
    });
  }

  novo() {
    this.router.navigate(["quadrinhos-novo"]);
  }

}
