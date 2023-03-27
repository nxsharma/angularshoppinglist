
import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // @ViewChild('nameInput',{static: false}) nameInputRef: ElementRef; //old method
  // @ViewChild('amountInput',{static: false}) amountInputRef: ElementRef;
  //@Output() ingredientAdded =new EventEmitter<Ingredient>();


  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(form: NgForm){
    const value = form.value;
    // const ingName = this.nameInputRef.nativeElement.value; //old method
    // const ingAmount = this.amountInputRef.nativeElement.value;
    // const newIngredient = new Ingredient(ingName, ingAmount);
    const newIngredient = new Ingredient(value.name, value.amount);
    //this.ingredientAdded.emit(newIngredient);
    this.slService.addIngredient(newIngredient);
  }
}
