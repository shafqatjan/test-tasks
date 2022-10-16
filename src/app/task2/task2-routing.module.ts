import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateFormJsonComponent } from './generate-form-json/generate-form-json.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'generate-form-json' },
  { path: 'generate-form-json', component: GenerateFormJsonComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Task2RoutingModule { }
