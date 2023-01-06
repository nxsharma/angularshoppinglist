import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe','This is simply a test','https://www.cookipedia.co.uk/wiki/images/2/2d/Chicken_curry_%282%29_recipe.jpg'),
        new Recipe('Another Recipe','This is simply a test','https://www.cookipedia.co.uk/wiki/images/2/2d/Chicken_curry_%282%29_recipe.jpg')
    ];

    getRecipes(){
        return this.recipes.slice(); //this way can't access recipes, but just the copies.
    }
}