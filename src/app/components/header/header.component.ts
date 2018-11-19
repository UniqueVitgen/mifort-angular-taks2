import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private name: string;
  @Output() changeName: EventEmitter<String> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeValue(name: KeyboardEvent) {
    this.changeName.emit((name.target as any).value);
  }

}
