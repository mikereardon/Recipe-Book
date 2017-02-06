import { Injectable } from '@angular/core';
import { Recipe } from "./recipe";
import { Ingredient } from "../ingredient";

@Injectable()
export class RecipeService {

private recipes: Recipe[] = [
  new Recipe('Schnitzel', 'Very Tasty', 'http://thumbs1.ebaystatic.com/d/l225/m/mfXELL6zPWJE4OC0agiXMZw.jpg',
   [new Ingredient('French Fries', 2),
    new Ingredient('Pork Meat', 1)]),
  new Recipe('Summer Salad', 'Okayish', 'http://thumbs1.ebaystatic.com/d/l225/m/mfXELL6zPWJE4OC0agiXMZw.jpg', [])
];
  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
