import { Component,  EventEmitter, Output,
  OnInit,OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements 
OnInit,OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  private name: string;
  @Output() changeName: EventEmitter<String> = new EventEmitter();

  constructor() { }


  ngOnInit() {

    console.log('header ngOnInit');
  }
  ngOnChanges(changes: import("/home/vitgen/dev/projects/angular/mifort/mifort-angular-taks2/node_modules/@angular/core/src/metadata/lifecycle_hooks").SimpleChanges): void {
    
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

  changeValue(name: KeyboardEvent) {
    this.changeName.emit((name.target as any).value);
  }

}
