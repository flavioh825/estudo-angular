import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Form } from '@angular/forms';

import { ContactService } from './contact.service';
import { Contact } from './contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  countries: Array<String> = ['', 'USA', 'Germany', 'Italy', 'France', 'Brazil'];
  
  contactForm: FormGroup;

  contacts: Array<Contact>;

  constructor(private contactService: ContactService,
              private formBuilder: FormBuilder) {  }

  revert() {
    this.contactForm.reset();
  }

  getContacts() {
    this.contactService.getContacts().subscribe(res => {
      this.contacts = res;
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  onSubmit() {
    //
  }

  ngOnInit() { 
    this.getContacts();
  }

}
