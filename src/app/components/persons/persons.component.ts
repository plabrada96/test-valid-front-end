import { PersonService } from './../../services/person-service/person.service';
import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/Person';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {


  persons: Person[] = [];
  idsPersons = new Array();
  uptateProcesseced:boolean = false;


  constructor(private _personService:PersonService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(param => {
      if(param){
        this.listPersons(param);
        this.listPersons(null);
        console.log("persons", this.listPersons(null) );
      }
      else
       
        console.log("persons", this.listPersons(null) );
        this.listPersons(null);
    });
  }

  listPersons(params:any){
    this._personService.getAllPersons(params).subscribe(res =>{
    this.persons = res.content;
    });
  }

  getPersonsSelected(idPerson){
    this.idsPersons.push(idPerson);
  }

  updatePersonsSelected(){
    console.log(this.idsPersons);
    
    this._personService.updateProcessed(this.idsPersons).subscribe(res =>{
      console.log("res",res);
      });
    this.uptateProcesseced = true;
    this.listPersons(null);
    this.refreshPage();
    
  }

  refreshPage() {
    window.location.reload();
   }

}
