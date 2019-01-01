import {
  Component, Input, Output, EventEmitter,
  OnInit, OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy, SimpleChanges
} from '@angular/core';
import { Item } from 'src/app/classes/item';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements 
OnInit,
  OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy   {
  Arr = Array;
  count: number = 3;
  @Input() name: string;
  // @Input() skills: string[];
  // @Input() numbers: number[];
  @Input() skillItems: Item[];
  @Output() changeSkillItems: EventEmitter<Item[]> = new EventEmitter();
  // @Output() changeNumbers: EventEmitter<Number[]> = new EventEmitter();

  constructor() {
  }


  ngOnInit(): void {

    console.log('content ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('content ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('content ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('content ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('content ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('content ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('content ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('content ngOnDestroy');
  }

  changeValues(value: number, index: number): void {
    this.skillItems[index].count = value;
    this.changeSkillItems.emit(this.skillItems);
    // this.changeNumbers.emit(this.numbers);
  }

}
