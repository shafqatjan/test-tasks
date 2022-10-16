import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterPipe } from '../pipes/search-filter-pipe';
import { SortIconComponent } from '../components/sort-icon/sort-icon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomFieldComponent } from '../components/custom-field/custom-field.component';
import { UtilService } from '../services/util.service';


@NgModule({
  declarations: [
    SearchFilterPipe,
    SortIconComponent,
    CustomFieldComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    SearchFilterPipe,
    SortIconComponent,
    CustomFieldComponent
  ],
  providers: [UtilService],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
