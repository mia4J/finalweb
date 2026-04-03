import { Routes } from '@angular/router';

import { LandingComponent } from './pages/landing/landing';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { ContactComponent } from './pages/contact/contact';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';
import { FunfactsComponent } from './pages/funfacts/funfacts';
import { PlacesComponent } from './pages/places/places';

export const routes: Routes = [

  { path: '', component: LandingComponent },   // default page
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'funfacts', component: FunfactsComponent },
  { path: 'places', component: PlacesComponent },

  { path: '**', redirectTo: '' } 

];