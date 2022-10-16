import { NgModule } from '@angular/core';

import { GenerateFormJsonComponent } from './generate-form-json/generate-form-json.component';
import { Task2RoutingModule } from './task2-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    GenerateFormJsonComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    SharedModule,
    Task2RoutingModule
    
  ]
})
export class Task2Module { }
