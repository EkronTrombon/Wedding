import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { RespAttending, Attending, Contacts, RespContact } from '../interfaces/interfaces';
import Swal from 'sweetalert2';

const URL_FIREBASE = environment.url;

@Injectable({
  providedIn: 'root'
})
export class WeddingService {

  constructor(private http: HttpClient) {}

  getAttendings() {
    return new Promise<Attending[]>((resolve, reject) => {
      this.http.get(URL_FIREBASE + '/attending').subscribe((resp: RespAttending) => {
        if (resp.ok) {
          resolve(resp.attending);
        } else {
          reject(resp);
        }
      });
    });
  }

  getContacts() {
    return new Promise<Contacts[]>((resolve, reject) => {
      this.http.get(URL_FIREBASE + '/contact').subscribe((resp: RespContact) => {
        if (resp.ok) {
          resolve(resp.contacts);
        } else {
          reject(resp);
        }
      });
    });
  }

  addAttending(attending: Attending) {
    return new Promise((resolve, reject) => {
      this.http.post(URL_FIREBASE + '/attending', attending).subscribe((resp: RespAttending) => {
        if (resp.ok) {
          resolve(resp);
          Swal.fire(resp.message, 'Thank you for attending! See you on September 26!', 'success');
        } else {
          reject(resp);
        }
      });
    });
  }

  addContact(contact: Contacts) {
    return new Promise((resolve, reject) => {
      this.http.post(URL_FIREBASE + '/contact', contact).subscribe((resp: RespContact) => {
        if (resp.ok) {
          resolve(resp);
          Swal.fire(resp.message, 'Thank you for contacting us! We will answer you as soon as possible...', 'success');
        } else {
          reject(resp);
        }
      });
    });
  }
}
