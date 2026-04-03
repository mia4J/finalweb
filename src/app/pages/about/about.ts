import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [Navbar,Footer,RouterModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {}
