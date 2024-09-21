import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredients } from '../../../shared/interfaces/ingredient.interface';
import { PanierService } from '../../../shared/services/panier.service';

@Component({
    selector: 'app-panier-container',
    templateUrl: './panier-container.component.html',
    styleUrls: ['./panier-container.component.sass'],
    })
    export class PanierContainerComponent implements OnInit, OnDestroy {
    public ingredients: Ingredients[] | null = null;
    public subscription?: Subscription;

    constructor(public panier:  PanierService) {}

    ngOnInit() {
        this.subscription = this.panier.ingredients$.subscribe(
        (ingredients: Ingredients[] | null) => (this.ingredients = ingredients)
        );
        }

        ngOnDestroy() {
        this.subscription!.unsubscribe();
        }
    }
