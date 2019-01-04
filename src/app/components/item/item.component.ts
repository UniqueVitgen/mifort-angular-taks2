import {
  Component, OnInit, Input, EventEmitter, Output, ViewChild,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy, SimpleChanges
} from '@angular/core';
import { SkillItem } from 'src/app/classes/skill-item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements
  OnInit, OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input() name: string;
  @Input() index: number;
  @Input() skill: string;
  @Output() onChangeNumber: EventEmitter<number> = new EventEmitter();
  @Input() count: number;

  constructor() { }




  ngOnInit(): void {

    console.log('item ' + this.skill + ' ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {

    console.log('item ' + this.skill + ' ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('item ' + this.skill + ' ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('item ' + this.skill + ' ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('item ' + this.skill + ' ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('item ' + this.skill + ' ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('item ' + this.skill + ' ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('item ' + this.skill + ' ngOnDestroy');
  }

  up(): void {
    this.count++;
    this.onChangeNumber.emit(this.count);
  }

  down(): void {
    this.count--;
    this.onChangeNumber.emit(this.count);
  }

}
