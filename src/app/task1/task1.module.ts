import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task1RoutingModule } from './task1-routing.module';
import { ReadCsvComponent } from './read-csv/read-csv.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchFilterPipe } from '../pipes/search-filter-pipe';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SortIconComponent } from '../components/sort-icon/sort-icon.component';
import { UtilService } from '../services/util.service';


@NgModule({
  declarations: [
    ReadCsvComponent,
    SearchFilterPipe,
    SortIconComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [UtilService],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    Task1RoutingModule
  ]
})
export class Task1Module { }
