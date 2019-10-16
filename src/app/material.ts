import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

@NgModule ({
  imports: [
    MatSliderModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  exports: [
    MatSliderModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
  ]
})
export class MaterialModule { }