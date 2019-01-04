import {
  Component, EventEmitter, Output,
  OnInit, OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements
OnInit,
  OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  @Output() changeName: EventEmitter<String> = new EventEmitter();

  constructor() { }


  ngOnInit(): void {

    console.log('header ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('header ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('header ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('header ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('header ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('header ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('header ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('header ngOnDestroy');
  }

  changeValue(name: string): void {
    this.changeName.emit(name);
  }

}
