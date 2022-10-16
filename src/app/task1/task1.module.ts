import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task1RoutingModule } from './task1-routing.module';
import { ReadCsvComponent } from './read-csv/read-csv.component';
import { HttpClientModule } from '@angular/common/http';
import { CsvService } from '../services/csv.service';
import { SearchFilterPipe } from '../pipes/search-filter-pipe';
import { SortIconComponent } from '../partialcomponents/sort-icon/sort-icon.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReadCsvComponent,
    SearchFilterPipe,
    SortIconComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [CsvService],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    Task1RoutingModule
  ]
})
export class Task1Module { }
