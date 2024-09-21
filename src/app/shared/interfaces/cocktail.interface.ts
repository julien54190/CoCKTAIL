import { Ingredients } from "./ingredient.interface";



export interface Cocktail{
  _id?: string;
  name: string;
  img: string;
  description: string;
  ingredients: Ingredients[]
}
