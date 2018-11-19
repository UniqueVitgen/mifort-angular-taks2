import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnChanges {
  Arr = Array; //Array type captured in a variable
  count:number = 3;
  @Input() name: string;
  @Input('numbers') numbers: number[];
  @Output() changeNumbers: EventEmitter<Number[]> = new EventEmitter();

  constructor() { 
  }

  ngOnInit() {
  }
  ngOnChanges(): void {
    console.log('this - ', this.numbers);
  }

  changeValues(value: number, index: number) {
    console.log(index, this.numbers[index]);
    this.numbers[index] = Number(value);
    this.changeNumbers.emit(this.numbers);
    console.log(this.numbers);
  }

}
