import { NgModule } from '@angular/core';
import { Task1RoutingModule } from './task1-routing.module';
import { ReadCsvComponent } from './read-csv/read-csv.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UtilService } from '../services/util.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ReadCsvComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [UtilService],
  imports: [
    SharedModule,
    Task1RoutingModule
  ]
})
export class Task1Module { }
