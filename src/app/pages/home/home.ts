import { Component, OnInit } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [Navbar,Footer,RouterModule,CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {

  weather: any;

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(){
    const apiKey = "5d23bddf27afb2e70af4ccf1aa24c81b"; // replace this
    const city = "New Bataan";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
      this.weather = data;
    })
    .catch(error => {
      console.log("Error:", error);
    });
  }

}