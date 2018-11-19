import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Item } from 'src/app/classes/item';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnChanges {
  Arr = Array; //Array type captured in a variable
  count:number = 3;
  @Input() name: string;
  @Input() skills: string[];
  @Input() numbers: number[];
  @Output() changeNumbers: EventEmitter<Number[]> = new EventEmitter();

  constructor() { 
  }

  ngOnInit() {
  }
  ngOnChanges(): void {
    // console.log('this - ', this.numbers);
  }

  changeValues(value: number, index: number) {
    this.numbers[index] = value;
    this.changeNumbers.emit(this.numbers);
  }

}
