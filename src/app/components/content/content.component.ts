import { Component, Input, Output, EventEmitter, 
  OnInit,OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy   } from '@angular/core';
import { Item } from 'src/app/classes/item';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements 
OnInit,OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy   {
  Arr = Array; //Array type captured in a variable
  count:number = 3;
  @Input() name: string;
  @Input() skills: string[];
  @Input() numbers: number[];
  @Output() changeNumbers: EventEmitter<Number[]> = new EventEmitter();

  constructor() { 
  }


  ngOnInit() {

    console.log('content ngOnInit');
  }
  ngOnChanges(changes: import("/home/vitgen/dev/projects/angular/mifort/mifort-angular-taks2/node_modules/@angular/core/src/metadata/lifecycle_hooks").SimpleChanges): void {
    
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

  changeValues(value: number, index: number) {
    this.numbers[index] = value;
    this.changeNumbers.emit(this.numbers);
  }

}
