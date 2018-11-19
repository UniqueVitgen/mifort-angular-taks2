import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatCardModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }
