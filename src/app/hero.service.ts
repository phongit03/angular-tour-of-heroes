import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
 
  private heroesUrl = 'api/heroes';  // URL to web api
  constructor(private http: HttpClient,private messageService: MessageService) { }

  getHeroes() : Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  getHero(id: number): Observable<Hero>{
    const hero = HEROES.find(hero => hero.id === id);
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero!);
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
