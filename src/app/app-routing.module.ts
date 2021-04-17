import { PersonsComponent } from './components/persons/persons.component';
import { FormComponent } from './components/form/form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'form', component: FormComponent},
  {path: 'persons', component: PersonsComponent},
  {path: '**', pathMatch:'full', redirectTo:'persons'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
