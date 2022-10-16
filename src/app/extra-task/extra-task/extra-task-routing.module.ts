import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtraTaskComponent } from './extra-task.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'read-json' },
  { path: 'read-json', component: ExtraTaskComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtraTaskRoutingModule { }
