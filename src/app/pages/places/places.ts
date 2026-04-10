import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-places',
  standalone: true,
  imports: [Navbar, Footer, RouterModule, CommonModule],
  templateUrl: './places.html',
  styleUrl: './places.css',
})
export class PlacesComponent {
  places = [
    {
      id: 1,
      image: 'GEORGE.jpg',
      title: 'George Inland Resort',
      short: 'A relaxing inland resort perfect for family outings.'
    },
    {
      id: 2,
      image: 'habel-rsrt.jpg',
      title: 'Habel Inland Resort',
      short: 'A refreshing resort surrounded by nature.'
    },
    {
      id: 3,
      image: 'aboutriver.png',
      title: 'Riverbanks',
      short: 'Fresh river scenery with peaceful surroundings.'
    },
    {
      id: 4,
      image: 'camgym.jpg',
      title: 'Camanlangan Gymnasium',
      short: 'A lively venue for sports and community events.'
    },
    {
      id: 5,
      image: 'landing-BG.jpg',
      title: 'Mountain View',
      short: 'A scenic spot with breathtaking landscapes.'
    },
    {
      id: 6,
      image: 'SIL.png',
      title: 'San Isidro Chapel',
      short: 'A peaceful place of worship and reflection.'
    },
    {
      id: 7,
      image: 'place3.jpg',
      title: 'Camanlangan Elementary School',
      short: 'A place of learning and community engagement.'
    },
    {
      id: 8,
      image: 'cnhs.jpg',
      title: 'Camanlangan National High School',
      short: 'A place of learning and community engagement.'
    }
  ];
}