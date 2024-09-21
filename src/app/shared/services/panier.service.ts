import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ingredients } from '../interfaces/ingredient.interface';


@Injectable({ providedIn: 'root' })
export class PanierService {
  public ingredients$: BehaviorSubject<
    Ingredients[] | null
  > = new BehaviorSubject<Ingredients[] | null>(null);

  constructor() {}

  addPanier(ingredients: Ingredients[]): void {
    const currentValue = this.ingredients$.value;
    if (currentValue) {
      const obj = [...currentValue, ...ingredients].reduce(
        (acc: { [x: string]: number }, value: Ingredients) => {
          if (acc[value.name]) {
            acc[value.name] += value.quantity;
          } else {
            acc[value.name] = value.quantity;
          }
          return acc;
        },
        {}
      );
      const result = Object.keys(obj).map(key => ({
        name: key,
        quantity: obj[key]
      }));
      this.ingredients$.next(result);
    } else {
      this.ingredients$.next(ingredients);
    }
  }
}
