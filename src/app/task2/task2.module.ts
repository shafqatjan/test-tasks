import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerateFormJsonComponent } from './generate-form-json/generate-form-json.component';
import { Task2RoutingModule } from './task2-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CustomFieldComponent } from '../components/custom-field/custom-field.component';


@NgModule({
  declarations: [
    GenerateFormJsonComponent,
    CustomFieldComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    Task2RoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class Task2Module { }
