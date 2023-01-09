import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";


export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Biryani','This is simply a test','https://en.wikipedia.org/wiki/Biryani#/media/File:Biryani_of_Lahore.jpg',  
         [
            new Ingredient('Meat',1),
            new Ingredient('Frendch Fries',20)
        ]), 
        new Recipe('Butter Chicken','This is simply a test','https://en.wikipedia.org/wiki/Butter_chicken#/media/File:Chicken_makhani.jpg',
        [
            new Ingredient('Buns',1),
            new Ingredient('MEat Fries',20)
        ])
      
    ];

    getRecipes(){
        return this.recipes.slice(); //this way can't access recipes, but just the copies.
    }

   
}