import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Attending } from '../../interfaces/interfaces';
import { WeddingService } from '../../services/wedding.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newAttending: Attending = {
    name: '',
    email: ''
  };
  attendings: Attending[] = [];

  constructor(private weddingService: WeddingService) {}

  ngOnInit() {}

  async attending(formAttending: NgForm) {
    if (formAttending.invalid) {
      console.log('All the fields are required!');
      return;
    }
    this.newAttending.name = formAttending.value.name;
    this.newAttending.email = formAttending.value.email;
    const resp = await this.weddingService.addAttending(this.newAttending);
    this.newAttending.name = '';
    this.newAttending.email = '';
  }

}
