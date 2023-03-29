import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route:ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
   
    //let tempId = JSON.parse(JSON.stringify(this.id));
  //  let tempEditMode = JSON.parse(JSON.stringify(this.editMode));
  
  this.route.params.subscribe(
      (params: Params) => {
        console.log(params['id']);
        this.id = + params['id'];
        this.editMode = params['id'] !== null;
        this.initForm();
        console.log(this.editMode);
      }
    );
  }

  //not necessary but example of setters
  public set ID(newID: number){
    this.id = newID;
  }

  public set EDITMODE(newEditMode: boolean){
    this.editMode = newEditMode;
  }

  private initForm(){    

    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';


    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription)
    });
  
  }

  onSubmit(){
    console.log(this.recipeForm);
  }

}
