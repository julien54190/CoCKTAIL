import { Component, OnInit, Input } from '@angular/core';
import { Cocktail } from '../../../../shared/interfaces/cocktail.interface';


@Component({
  selector: 'app-cocktail-list',
  templateUrl: './coktail-list.component.html',
  styleUrls: ['./coktail-list.component.sass'],
})
export class CocktailListComponent implements OnInit {
  @Input() public cocktails: Cocktail[] | null = null;
  public search = '';

  constructor() {}

  ngOnInit(): void {}
}
