import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [Navbar,Footer,RouterModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {}
