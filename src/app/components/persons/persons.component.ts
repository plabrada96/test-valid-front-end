import { PersonService } from './../../services/person-service/person.service';
import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/Person';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
})
export class PersonsComponent implements OnInit {
  persons: Person[] = [];
  idsPersons = new Array();
  uptateProcesseced: boolean = false;

  constructor(
    private _personService: PersonService
  ) {}

  ngOnInit(): void {
    this.listPersons(null);
  }

  listPersons(params: any) {
    this._personService.getAllPersons(params).subscribe((res) => {
      this.persons = res.content;
    });
  }

  getPersonsSelected(idPerson) {
    this.idsPersons.push(idPerson);
  }

  updatePersonsSelected() {
    this._personService.updateProcessed(this.idsPersons).subscribe((res) => {
      console.log('res', res);
    });
    this.uptateProcesseced = true;
    this.listPersons(null);
    this.refreshPage();
  }

  refreshPage() {
    window.location.reload();
  }
}
