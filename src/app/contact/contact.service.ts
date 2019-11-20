import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { Contact } from "./contact.model";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

const apiUrl = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${ apiUrl }/contacts`, httpOptions);
  }

  getContact(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${ apiUrl }/contacts/${ id }`, httpOptions);
  }

  createContact(contact): Observable<Contact> {
    return this.http.post<Contact>(`${ apiUrl }/contacts/`, contact, httpOptions);
  }

  updateContact(id, contact): Observable<Object> {
    return this.http.put(`${ apiUrl }/contacts/${ id }`, contact, httpOptions);
  }

  deleteContact(id): Observable<Contact> {
    return this.http.delete<Contact>(`${ apiUrl }/contacts/${ id }`, httpOptions);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

}
