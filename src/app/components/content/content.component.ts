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
import { SkillItem } from 'src/app/classes/skill-item';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html'
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
  count: number = 3;
  @Input() name: string;
  @Input() skillItems: SkillItem[];
  @Output() changeSkillItems: EventEmitter<SkillItem[]> = new EventEmitter();

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
    const skillItems: SkillItem[] = this.skillItems.slice();
    skillItems[index].count = value;
    this.changeSkillItems.emit(this.skillItems);
    // this.changeNumbers.emit(this.numbers);
  }

}
