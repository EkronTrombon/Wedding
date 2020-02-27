import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { WeddingComponent } from './wedding/wedding.component';
import { GuestsComponent } from './guests/guests.component';
import { ContactComponent } from './contact/contact.component';
import { PrehomeComponent } from './prehome/prehome.component';

const routes: Routes = [
  { path: 'prehome', component: PrehomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'our-story', component: OurStoryComponent },
  { path: 'wedding', component: WeddingComponent },
  { path: 'guests', component: GuestsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'prehome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
