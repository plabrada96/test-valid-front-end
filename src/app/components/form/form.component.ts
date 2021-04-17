import { PersonService } from './../../services/person-service/person.service';
import { Person } from './../../models/Person';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  person: Person = new Person();
  personSaved: boolean = false;

  constructor(private _fromService:PersonService) { }

  ngOnInit(): void {
  }

  save(form:NgForm){
    if(form.invalid){
      console.log('Format no válid');
      return;
    }

    this._fromService.savePerson(this.person).subscribe(res=>{
      console.log(res);
      this.personSaved=true;
    })
  }
}
