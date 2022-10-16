import { NgModule } from '@angular/core';
import { ExtraTaskRoutingModule } from './extra-task-routing.module';
import { UtilService } from '../services/util.service';
import { FormFieldComponent } from './form-field/form-field.component';
import { ExtraFormComponent } from './extra-form/extra-form.component';
import { ExtraTaskComponent } from './extra-task/extra-task.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ExtraTaskComponent,
    ExtraFormComponent,
    FormFieldComponent
  ],
  providers: [UtilService],
  imports: [
    SharedModule,
    ExtraTaskRoutingModule
  ]
})
export class ExtraTaskModule { }
