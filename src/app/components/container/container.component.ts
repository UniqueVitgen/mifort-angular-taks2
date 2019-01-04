import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';
import {SkillItem} from '../../classes/skill-item';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html'
})
export class ContainerComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  name: string;
  items: SkillItem[] = [
    {count: 0, skill: 'strength'},
    {count: 0, skill: 'power'},
    {count: 0, skill: 'speed'},
  ];

  constructor() { }

  ngOnInit(): void {

    console.log('container ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('container ngOnChanges');
  }

  ngDoCheck(): void {
    console.log('container ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('container ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('container ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('container ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('container ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('container ngOnDestroy');
  }

  changeName(name: string): void {
    console.log(name);
    this.name = name;
  }
  changeSkillItems(items: SkillItem[]): void {
    this.items = items;
  }

}
