import { Component, OnInit } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Navbar, Footer, RouterModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  /* ================= WEATHER ================= */
  weather: any = {
    main: { temp: '--' },
    weather: [{ description: 'Loading...', icon: '02d' }]
  };

  /* ================= DESTINATIONS ================= */
  destinations = [
    {
      image: 'GEORGE.jpg',
      title: 'George Inland Resort',
      location: 'Camanlangan'
    },
    {
      image: 'habel-rsrt.jpg',
      title: 'Habel Inland Resort',
      location: 'Camanlangan'
    },
    {
      image: 'landing-BG.jpg',
      title: 'Mountain View',
      location: 'Camanlangan'
    },
    {
      image: 'SIL.png',
      title: 'San Isidro Chapel',
      location: 'Camanlangan'
    },
    {
      image: 'place3.jpg',
      title: 'Camanlangan Elementary School',
      location: 'Camanlangan'
    },
    {
      image: 'cnhs.jpg',
      title: 'Camanlangan National High School',
      location: 'Camanlangan'
    }
  ];

  currentIndex = 1;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getWeather();

    // optional auto slide every 4 sec
    setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  /* ================= WEATHER API ================= */
  getWeather() {
    const apiKey = environment.weatherApiKey;
    const lat = 7.673;
    const lon = 126.125;

    const url =
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    this.http.get(url).subscribe({
      next: (data: any) => {
        this.weather = data;
      },
      error: () => {
        this.weather = {
          main: { temp: '--' },
          weather: [{ description: 'Weather unavailable', icon: '02d' }]
        };
      }
    });
  }

  /* ================= SLIDER ================= */
  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.destinations.length) %
      this.destinations.length;
  }

  nextSlide() {
    this.currentIndex =
      (this.currentIndex + 1) %
      this.destinations.length;
  }

  getVisibleDestinations() {
    const prev =
      (this.currentIndex - 1 + this.destinations.length) %
      this.destinations.length;

    const next =
      (this.currentIndex + 1) %
      this.destinations.length;

    return [
      { ...this.destinations[prev], class: 'side' },
      { ...this.destinations[this.currentIndex], class: 'active' },
      { ...this.destinations[next], class: 'side' }
    ];
  }
}