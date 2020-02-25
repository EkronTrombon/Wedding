import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { WeddingComponent } from './wedding/wedding.component';
import { GuestsComponent } from './guests/guests.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, OurStoryComponent, WeddingComponent, GuestsComponent, ContactComponent],
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
