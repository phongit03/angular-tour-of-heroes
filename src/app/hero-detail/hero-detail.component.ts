import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{


  hero?: Hero;
  
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {

  }

  ngOnInit(): void {
    this.getHeroDetails();
  }

  getHeroDetails(): void {
   
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHeroById(id).subscribe(hero => this.hero = hero);
  }
  
  saveDetails() {
    if(this.hero) {
      alert("Updated this Hero!")
      this.heroService.updateHero(this.hero!).subscribe(() => this.goBack());
    }
  } 

  deleteDetails() {
    if(this.hero) {
      this.heroService.deleteHero(this.hero.id).subscribe((hero => {
        this.goBack();
      }));
    }
  }

  goBack(): void {
    this.location.back();
  }
}
