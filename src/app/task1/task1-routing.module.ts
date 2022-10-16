import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadCsvComponent } from './read-csv/read-csv.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'read-csv' },
  { path: 'read-csv', component: ReadCsvComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Task1RoutingModule { }
