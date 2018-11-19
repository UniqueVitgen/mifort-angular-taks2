import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() name: string;
  @Input() index: number;
  @Output() onChangeNumber: EventEmitter<Number> = new EventEmitter();
  @Input('value') value: number;

  constructor() { }

  ngOnInit() {
  }

  changeValue(number) {
    this.onChangeNumber.emit(number);
  }

}
