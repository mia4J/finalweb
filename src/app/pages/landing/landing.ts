import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [Navbar,Footer,RouterModule],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class LandingComponent {}
