import { Component, 
  OnInit,OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements 
OnInit,OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  @Input() numbers: number[];

  constructor() { }


  ngOnInit() {

    console.log('total ngOnInit');
  }
  ngOnChanges(changes: import("/home/vitgen/dev/projects/angular/mifort/mifort-angular-taks2/node_modules/@angular/core/src/metadata/lifecycle_hooks").SimpleChanges): void {
    
    console.log('total ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('total ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('total ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('total ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('total ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('total ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('total ngOnDestroy');
  }

  calculateSum(numbers: number[]) {
    let sum = 0;
    for(let value of numbers) {
      sum += value;
    }
    return sum;
  }

}
