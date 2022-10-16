import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtraTaskRoutingModule } from './extra-task-routing.module';
import { ExtraTaskComponent } from './extra-task.component';


@NgModule({
  declarations: [
    ExtraTaskComponent
  ],
  imports: [
    CommonModule,
    ExtraTaskRoutingModule
  ]
})
export class ExtraTaskModule { }
