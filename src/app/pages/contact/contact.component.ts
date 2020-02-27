import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contacts } from '../../interfaces/interfaces';
import { WeddingService } from '../../services/wedding.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  newContact: Contacts = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  };
  contacts: Contacts[] = [];

  constructor(private weddingService: WeddingService,
              private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Contact');
  }

  async contact(formContact: NgForm) {
    if (formContact.invalid) {
      console.log('All the fields are required!');
      return;
    }
    this.newContact.firstName = formContact.value.firstName;
    this.newContact.lastName = formContact.value.lastName;
    this.newContact.email = formContact.value.email;
    this.newContact.subject = formContact.value.subject;
    this.newContact.message = formContact.value.message;
    const resp = await this.weddingService.addContact(this.newContact);
    this.newContact.firstName = '';
    this.newContact.lastName = '';
    this.newContact.email = '';
    this.newContact.subject = '';
    this.newContact.message = '';
  }

}
