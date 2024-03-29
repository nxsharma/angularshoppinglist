import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
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

    constructor(private slService: ShoppingListService ){

    }

    getRecipes(){
        return this.recipes.slice(); //this way can't access recipes, but just the copies.
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

   
}