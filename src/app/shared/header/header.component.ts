import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() page: string;

  backgroundImg = 'home_header.jpg';
  title = 'Ashley &amp Xabier';

  constructor() {}

  ngOnInit() {
    switch (this.page) {
      case 'home':
        this.backgroundImg = 'home_header.jpg';
        this.title = 'Ashley & Xabier';
        break;
      case 'our-story':
        this.backgroundImg = 'ourstory_header.jpg';
        this.title = 'Our Story';
        break;
      case 'wedding':
        this.backgroundImg = 'wedding_header.jpg';
        this.title = 'Wedding';
        break;
      case 'guests':
        this.backgroundImg = 'guests_header.jpg';
        this.title = 'Guests';
        break;
      case 'contact':
        this.backgroundImg = 'contact.jpg';
        this.title = 'Contact';
        break;
      default:
        this.backgroundImg = 'home_header.jpg';
        this.title = 'Ashley &amp Xabier';
        break;
    }
  }

}
