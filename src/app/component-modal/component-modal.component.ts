import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-modal',
  templateUrl: './component-modal.component.html',
  styleUrls: ['./component-modal.component.scss']
})
export class ComponentModalComponent implements OnInit {

  dados: any = {
    titulo: 'Lorem ipsum dolor F ',
    rating:4.25632,
    preco:42.98,
    data:new Date(2016,5,23),
    url:'http://globo.com'
  }
  constructor() { }

  ngOnInit() {
  }

}
