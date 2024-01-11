import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() name: string = ""

  constructor () {
      console.log("Constructor");
    }

  // Onchanges é um evento disparado sempre que o valor de uma propriedade é alterado
  ngOnChanges(): void {
    console.log("OnChange");
  }

  //OnItnit é um evento que será disparado sempre que o componente for iniciado
  ngOnInit(): void {
    console.log("OnInit");
  }
}
