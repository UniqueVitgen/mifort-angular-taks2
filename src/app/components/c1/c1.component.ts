import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/classes/item';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.scss']
})
export class C1Component implements OnInit {
  name: string;
  numbers: number[] = [1,1,1];
  items: Item[] = [
    {count: 0, skill: 'strength'},
    {count: 0, skill: 'power'},
    {count: 0, skill: 'speed'},
  ]
  skills: string[] = ['strength', 'power', 'speed']

  constructor() { }

  ngOnInit() {
  }

  changeName(name: string) {
    console.log(name);
    this.name = name;
  }

  changeNumbers(numbers: number[]) {
    console.log(numbers);
    this.numbers = numbers;
  }

}
