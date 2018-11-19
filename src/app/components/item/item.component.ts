import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @ViewChild('')
  @Input() name: string;
  @Input() index: number;
  @Output() onChangeNumber: EventEmitter<Number> = new EventEmitter();
  @Input('value') value: number;

  constructor() { }

  ngOnInit() {
  }

  changeValue(valueNumber) {
    
    console.log(valueNumber);
    const value = (<HTMLInputElement>valueNumber).value.trim();
    this.onChangeNumber.emit(Number(value));
  }

}
