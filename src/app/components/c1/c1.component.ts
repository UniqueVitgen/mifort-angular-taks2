import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.scss']
})
export class C1Component implements OnInit {
  name: string;
  numbers: number[] = [1,1,1];

  constructor() { }

  ngOnInit() {
  }

  changeName(name: string) {
    console.log(name);
    this.name = name;
  }

  changeNumbers(numbers: number[]) {
    this.numbers = numbers;
  }

}
