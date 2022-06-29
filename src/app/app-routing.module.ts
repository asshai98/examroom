import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultipleChoiseComponent } from './multiple-choise-component/multiple-choise-component.component';
import { MultipleResponseComponent } from './multiple-response-component/multiple-response-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/Create', pathMatch: 'full' },
  { path: 'Create', component:  MultipleChoiseComponent},
  { path: 'View', component:  MultipleResponseComponent},
];

export const appRouting = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
