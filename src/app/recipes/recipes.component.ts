import { Component, OnInit } from '@angular/core';
//old method import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  // old method selectedRecipe: Recipe;
  
  // constructor(private recipeService: RecipeService) { }

  constructor() { }

  ngOnInit(): void {
    // this.recipeService.recipeSelected.subscribe((recipe: Recipe) => { //old method
    //   this.selectedRecipe = recipe;
    // });
  }

}

