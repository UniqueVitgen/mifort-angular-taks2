import {
  Component,
  OnInit, OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy, Input, SimpleChanges
} from '@angular/core';
import {SkillItem} from '../../classes/skill-item';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html'
})
export class TotalComponent implements
OnInit,
  OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  @Input() skillItems: SkillItem[];

  constructor() { }


  ngOnInit(): void {

    console.log('total ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
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

  calculateSum(skillItems: SkillItem[]): number {
    return skillItems
      .map((item: SkillItem) => item.count)
      .reduce((sum: number, value: number) => {
      return sum + value;
    });
  }

}
