import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit {
  @Input() numbers: number[];

  constructor() { }

  ngOnInit() {
  }

  calculateSum(numbers: number[]) {
    let sum = 0;
    for(let value of numbers) {
      sum += value;
    }
    return sum;
  }

}
