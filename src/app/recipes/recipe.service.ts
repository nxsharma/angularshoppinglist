import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{

    recipesChanged = new Subject<Recipe[]>;
    //recipeSelected = new EventEmitter<Recipe>();
    //recipeSelected = new Subject<Recipe>(); //new method can be used


    private recipes: Recipe[] = [
        new Recipe('Biryani','This is simply a test','https://glebekitchen.com/wp-content/uploads/2019/12/chickenbiryanibowltop-500x375.jpg',  
         [
            new Ingredient('Meat',1),
            new Ingredient('Frendch Fries',20)
        ]), 
        new Recipe('Butter Chicken','This is simply a test','https://images.immediate.co.uk/production/volatile/sites/30/2021/02/butter-chicken-ac2ff98.jpg',
        [
            new Ingredient('Buns',1),
            new Ingredient('Chicken Fries',20)
        ])
      
    ];

    constructor(private slService: ShoppingListService ){

    }

    getRecipes(){
        return this.recipes.slice(); //this way can't access recipes, but just the copies.
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){

        //same approach we used in shoppinglist service
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());

    }
    
    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }

   
}