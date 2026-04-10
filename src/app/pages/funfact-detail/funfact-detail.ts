import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-funfact-detail',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './funfact-detail.html',
  styleUrl: './funfact-detail.css'
})
export class FunfactDetailComponent implements OnInit {
  content: any;

  facts: any = {
    origin: {
      title: 'Origin of Camanlangan',
      description:
      'Barangay Camanlangan got its name from the phrase “kamang lang, bahalag malangan,”, which means "to keep moving forward even if progress is slow". This reflects the perseverance and resilience of the early residents.',
      highlight: 'Rich forests and scenic mountain views.',
      story: 'The barangay officially celebrates its Founding Anniversary every November 11, established in 1982, honoring its humble beginnings and continued growth through the years.',
      image: 'landing-BG.jpg'
    },
    nature: {
      title: 'Nature and Mountains',
      description:
        'The barangay is surrounded by green forests and mountain ranges, making it a hidden eco-tourism gem.',
      highlight: 'Barangay Camanlangan is one of the nature-rich barangays of New Bataan, known for its lush forests, cool mountain landscapes, and peaceful surroundings.',
      story: 'Its mountain environment creates a relaxing atmosphere ideal for hiking, sightseeing, swimming resorts, and outdoor family bonding. The natural beauty of Camanlangan reflects the calm and resilient spirit of its people, making it one of the hidden gems of New Bataan.',
      image: 'aboutriver.png'
    },
    culture: {
      title: 'Local Culture',
      description:
        'Camanlangan celebrates traditions through farming festivals and local gatherings.',
      highlight: 'Barangay Camanlangan is rich in community traditions, hospitality, and strong family values. The people are known for their warm welcome, bayanihan spirit, and active participation in barangay celebrations, especially during the Founding Anniversary every November 11.',
      story: 'The story of Barangay Camanlangan is rooted in perseverance and resilience. Its name is believed to have come from the phrase “kamang lang, bahalag malangan,” meaning keep moving forward even if progress is slow. This story symbolizes the determination of the early settlers who patiently built the community despite hardships. Through time, Camanlangan grew into a peaceful barangay known for its natural beauty, mountain landscapes, and united people. Today, its story continues through the lives of residents who preserve its traditions while welcoming progress.',
      image: 'camgym.jpg'
    },
    funfact: {
      title: 'Did you Know?',
      description: 'A Growing Community',
      highlight: 'As of the 2024 census, Camanlangan has a population of 5,870 residents, making it one of the active and growing barangays in New Bataan.',
      story: 'Over the years, Barangay Camanlangan has continued to grow as more families chose to build their lives in this peaceful mountain community. From a humble population of 5,424 in 1990, it gradually increased to 5,870 residents in 2024, showing the steady progress and development of the barangay through the years. This growth reflects the strong sense of unity, safety, and opportunity that makes Camanlangan a welcoming home for its residents. As the community continues to expand, its traditions, culture, and close family ties remain at the heart of everyday life.',
      image: 'barangayhall.png'
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.content = this.facts[id!];
  }
}