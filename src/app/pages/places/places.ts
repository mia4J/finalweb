import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-places',
  imports: [Navbar,Footer,RouterModule],
  templateUrl: './places.html',
  styleUrl: './places.css',
})
export class PlacesComponent {}
