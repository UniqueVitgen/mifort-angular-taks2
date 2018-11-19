import {
  Component, OnInit, Input, EventEmitter, Output, ViewChild,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';
import { Item } from 'src/app/classes/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
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




  ngOnInit() {

    console.log('item ' + this.skill + ' ngOnInit');
  }
  ngOnChanges(changes: import("/home/vitgen/dev/projects/angular/mifort/mifort-angular-taks2/node_modules/@angular/core/src/metadata/lifecycle_hooks").SimpleChanges): void {

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

  up() {
    this.count++;
    this.onChangeNumber.emit(this.count);
  }

  down() {
    this.count--;
    this.onChangeNumber.emit(this.count);
  }

}
