import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  produtos: string[] = []
  menuType:string = "admin"

  constructor() {
    this.produtos = [
      "mouse",
      "keyboard",
      "wires",
      "charger"
    ]
  }

  ngOnInit(): void {

  }

  add() {
    this.produtos.push("Skin's LoL CardGift");
  }

  remove(index:number) {
    this.produtos.splice(index, 1);
  }

}
