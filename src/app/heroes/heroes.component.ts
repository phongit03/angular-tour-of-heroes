import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({

  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit{

  constructor(private heroService: HeroService, private messageService: MessageService) {

  }

  ngOnInit(): void {
    this.getHeroes();
  }

  heroes: Hero[] = [];
  
 

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(res=>{
      this.heroes = res;
    }, err => {
      console.log(err as string);
      alert("Failed to fetch heroes");
    })
  }
}
