import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtraTaskRoutingModule } from './extra-task-routing.module';
import { UtilService } from '../services/util.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from './form-field/form-field.component';
import { ExtraFormComponent } from './extra-form/extra-form.component';
import { ExtraTaskComponent } from './extra-task/extra-task.component';


@NgModule({
  declarations: [
    ExtraTaskComponent,
    ExtraFormComponent,
    FormFieldComponent
  ],
  providers: [UtilService],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ExtraTaskRoutingModule
  ]
})
export class ExtraTaskModule { }
