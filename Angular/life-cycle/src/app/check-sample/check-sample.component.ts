import { Component, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {
  quantity: number = 0;

  constructor() { }

  addQuantity() {
    this.quantity += 1;
  }

  decreaseQuantity() {
    this.quantity -= 1;
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ngOnDestroy(): void {
    console.log("goodbay my friend-component");
  }
}
