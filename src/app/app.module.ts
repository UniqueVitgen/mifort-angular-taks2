import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C1Component } from './components/c1/c1.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { ItemComponent } from './components/item/item.component';
import { TotalComponent } from './components/total/total.component';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { TimesPipe } from './pipes/times/times.pipe';
import { OnlyNumbersDirective } from './directives/only-numbers/only-numbers.directive';

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    HeaderComponent,
    ContentComponent,
    ItemComponent,
    TotalComponent,
    TimesPipe,
    OnlyNumbersDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
