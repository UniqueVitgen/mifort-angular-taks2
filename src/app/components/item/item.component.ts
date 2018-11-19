import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { Item } from 'src/app/classes/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() name: string;
  @Input() index: number;
  @Input() skill: string;
  @Output() onChangeNumber: EventEmitter<number> = new EventEmitter();
  @Input() count: number;

  constructor() { }

  ngOnInit() {
  }

  up() {
    this.count++;
    this.onChangeNumber.emit(this.count);
  }

  down() {
    this.count--;
    this.onChangeNumber.emit(this.count);
  }

}
