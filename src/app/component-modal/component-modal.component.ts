import { Component, Inject, Input, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-component-modal',
  templateUrl: './component-modal.component.html',
  styleUrls: ['./component-modal.component.scss']
})
export class ComponentModalComponent implements OnInit {

  @Input() titulo: String ='';

  dados: any = {
    titulo: 'Lorem ipsum dolor F ',
    rating:4.25632,
    preco:42.98,
    data:new Date(2016,5,23),
    url:'http://globo.com'
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
      console.log("no component bb.:"+JSON.stringify(this.data))
  }



}
