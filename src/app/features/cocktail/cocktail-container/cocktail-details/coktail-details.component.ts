import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Subscription } from 'rxjs';
import { Cocktail } from '../../../../shared/interfaces/cocktail.interface';
import { CocktailService } from '../../../../shared/services/cocktail.service';
import { PanierService } from '../../../../shared/services/panier.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './coktail-details.component.html',
  styleUrls: ['./coktail-details.component.sass'],
})
export class CocktailDetailsComponent implements OnInit {
  public cocktail!: Cocktail;
  public subscription?: Subscription

  constructor(
    public cocktailService: CocktailService,
    public panierService: PanierService,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const cocktailIndex = paramMap.get('index')
      if(cocktailIndex) {
        this.subscription = this.cocktailService.getCocktail(+cocktailIndex).subscribe(
          (cocktail: Cocktail) => {
            this.cocktail = cocktail;
          }
        )
      }

      // const cocktailIndex = paramMap.get('index');
      // if (cocktailIndex) {
      //   this.cocktailService.getCocktail(+cocktailIndex).subscribe((cocktail: Cocktail) => {
      //     this.cocktail = cocktail;
      //   });
      // }
    });
  }

  public addToPanier(): void {
    if (this.cocktail) {
      this.panierService.addPanier(this.cocktail.ingredients);
    }
  }
}
