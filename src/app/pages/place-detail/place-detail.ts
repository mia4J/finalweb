import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-place-detail',
  standalone: true,
  imports: [Navbar, Footer, CommonModule],
  templateUrl: './place-detail.html',
  styleUrl: './place-detail.css'
})
export class PlaceDetailComponent implements OnInit {
  place: any;

  places: any = {
    1: {
      title: 'George Inland Resort',
      image: 'GEORGE.jpg',
      description:
        'George Inland Resort is one of the most visited destinations in Camanlangan. It offers refreshing pools, relaxing cottages, and a peaceful environment perfect for family bonding.',
      location: 'Camanlangan, New Bataan',
      bestTime: 'Summer season and weekends',
      history: 'Established by local residents as a community leisure destination.'
    },
    2: {
      title: 'Habel Inland Resort',
      image: 'habel-rsrt.jpg',
      description:
        'A beautiful inland resort surrounded by green landscapes and fresh mountain air.',
      location: 'Camanlangan',
      bestTime: 'Morning to afternoon',
      history: 'Known for its cool waters and family-friendly environment.'
    },
    3: {
      title: 'Riverbanks',
      image: 'aboutriver.png',
      description:
        'The riverbanks in Camanlangan offer a peaceful nature escape with flowing waters and lush surroundings.',
      location: 'Camanlangan River Area',
      bestTime: 'Morning and sunset',
      history: 'A favorite natural destination for locals and visitors.'
    },
    4: {
      title: 'Camanlangan Gymnasium',
      image: 'camgym.jpg',
      description:
        'A central venue for sports, school events, and barangay celebrations.',
      location: 'Barangay Proper',
      bestTime: 'Event days and evenings',
      history: 'Built as a community center for gatherings and activities.'
    },
    5: {
      title: 'Mountain View',
      image: 'landing-BG.jpg',
      description:
        'A scenic overlooking spot where visitors can enjoy mountains, cool weather, and sunrise.',
      location: 'Camanlangan Highlands',
      bestTime: 'Early morning sunrise',
      history: 'Popular among hikers and local travelers.'
    },
    6: {
      title: 'San Isidro Chapel',
      image: 'SIL.png',
      description:
        'A peaceful place of worship known for its serene atmosphere and spiritual significance.',
      location: 'Camanlangan Chapel Grounds',
      bestTime: 'Sunday mornings and feast day',
      history: 'A long-standing religious landmark of the barangay.'
    },
    7: {
      title: 'Camanlangan Elementary School',
      image: 'place3.jpg',
      description:
        'A place of learning and community engagement.',
      location: 'Camanlangan Proper',
      bestTime: 'Weekdays during school hours',
      history: 'Established to provide education to local children.'
    },
    8: {
      title: 'Camanlangan National High School',
      image: 'cnhs.jpg',
      description:
        'A place of learning and community engagement.',
      location: 'Camanlangan Proper',
      bestTime: 'Weekdays during school hours',
      history: 'Established to provide education to local children.'
    },
  };
  

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.place = this.places[id!];

    if (!this.place) {
      this.place = {
        title: 'Place Not Found',
        image: 'landing-BG.jpg',
        description: 'This destination is unavailable.',
        location: 'Camanlangan',
        bestTime: 'Anytime',
        history: 'No available history.'
      };
    }
  }
}