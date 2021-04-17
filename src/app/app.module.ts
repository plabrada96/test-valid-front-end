import { HttpClientModule } from '@angular/common/http';
import { PersonService } from './services/person-service/person.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { PersonsComponent } from './components/persons/persons.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms"; 

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PersonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
