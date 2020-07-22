import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndiaMapService } from './india-map.service';
import { IndiaMapComponent } from './india-map.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IndiaMapComponent],
  providers: [IndiaMapService],
  exports: [IndiaMapComponent]
})
export class IndiaMapModule { }
