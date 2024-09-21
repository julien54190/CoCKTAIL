import { Component, Input, OnInit } from '@angular/core';
import { Ingredients } from '../../../../shared/interfaces/ingredient.interface';


@Component({
    selector: 'app-ingredient-list',
    templateUrl: './ingredient-list.component.html',
    styleUrls: ['./ingredient-list.component.sass'],
})
export class IngredientListComponent implements OnInit {
    @Input() public ingredients: Ingredients[] | null = null;

    constructor() {}

    ngOnInit() {}
}
