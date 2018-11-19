import { Component, 
  OnInit,OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy  
} from '@angular/core';
import { Item } from 'src/app/classes/item';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.scss']
})
export class C1Component  implements
OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  name: string;
  numbers: number[] = [1,1,1];
  items: Item[] = [
    {count: 0, skill: 'strength'},
    {count: 0, skill: 'power'},
    {count: 0, skill: 'speed'},
  ]
  skills: string[] = ['strength', 'power', 'speed']

  constructor() { }

  ngOnInit() {

    console.log('c1 ngOnInit');
  }
  ngOnChanges(changes: import("/home/vitgen/dev/projects/angular/mifort/mifort-angular-taks2/node_modules/@angular/core/src/metadata/lifecycle_hooks").SimpleChanges): void {
    
    console.log('c1 ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('c1 ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('c1 ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('c1 ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('c1 ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('c1 ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('c1 ngOnDestroy');
  }

  changeName(name: string) {
    console.log(name);
    this.name = name;
  }

  changeNumbers(numbers: number[]) {
    console.log(numbers);
    this.numbers = numbers;
  }

}
