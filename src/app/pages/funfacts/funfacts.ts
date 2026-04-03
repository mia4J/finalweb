import { Component } from '@angular/core';
import { Footer } from '../../components/footer/footer';
import { Navbar } from '../../components/navbar/navbar';

@Component({
  selector: 'app-funfacts',
  imports: [Navbar,Footer],
  templateUrl: './funfacts.html',
  styleUrl: './funfacts.css',
})
export class FunfactsComponent {}
