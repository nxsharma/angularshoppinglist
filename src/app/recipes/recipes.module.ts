import {  NgModule } from "@angular/core";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes.component";
import { RouterModule } from "@angular/router";
import { Directive, HostBinding, HostListener } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { DropDownDirective } from "../shared/dropdown.directive";
import { DirectivesModule } from "../directives.module";
import { RecipesRoutingModule } from "./recipes-routing.module";


@NgModule({
    declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    
   
    
    ],
    imports:[RouterModule, CommonModule, ReactiveFormsModule, DirectivesModule, RecipesRoutingModule],
    exports:[
        RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  
    ]
})
export class RecipesModule{}