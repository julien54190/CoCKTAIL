import { Component, OnInit } from '@angular/core';
import { Cocktail } from './shared/interfaces/cocktail.interface';
import { CocktailService } from './shared/services/cocktail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit {

  constructor(private cocktailService: CocktailService){}

  ngOnInit(): void {
    this.cocktailService.fetchCocktails().subscribe();
  }

}
