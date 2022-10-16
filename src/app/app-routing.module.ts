import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'task1', loadChildren: () => import(`./task1/task1.module`).then(module => module.Task1Module) },
  { path: 'task2', loadChildren: () => import(`./task2/task2.module`).then(module => module.Task2Module) },
  { path: 'extra-task', loadChildren: () => import(`./extra-task/extra-task/extra-task.module`).then(module => module.ExtraTaskModule) },
  { path: '', pathMatch: 'full', redirectTo: 'task1' },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
