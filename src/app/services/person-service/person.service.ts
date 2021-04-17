import { Enviroments } from '../enviroments';
import { Person } from '../../models/Person';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private urlBase: string;

  constructor(private http: HttpClient) {
    this.urlBase = Enviroments.urlBase + Enviroments.urlPerson;
  }

  savePerson(person: Person) {
    return this.http.post(this.urlBase, person);
  }

  updateProcessed(parameters: any): Observable<any> {
    
    return this.http.put<any>(this.urlBase, parameters);
  }

  getAllPersons(parameters: any): Observable<any> {
    return this.http.get<Person>(this.urlBase, { params: parameters });
  }
}
