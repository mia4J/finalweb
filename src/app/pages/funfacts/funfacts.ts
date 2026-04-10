import { Component } from '@angular/core';
import { Footer } from '../../components/footer/footer';
import { Navbar } from '../../components/navbar/navbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-funfacts',
  imports: [Navbar,Footer,RouterModule],
  templateUrl: './funfacts.html',
  standalone: true,
  styleUrl: './funfacts.css',
})
export class FunfactsComponent {}
