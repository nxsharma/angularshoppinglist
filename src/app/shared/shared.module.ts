import { NgModule } from '@angular/core';

import { AlertComponenet } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PlaceHolderDirective } from './placeholder/placeholder.directive';
import { DropDownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations:[
        AlertComponenet,
        LoadingSpinnerComponent,
        PlaceHolderDirective,
        DropDownDirective
    ],

    imports:[
        CommonModule
    ],
    exports:[
        AlertComponenet,
        LoadingSpinnerComponent,
        PlaceHolderDirective,
        DropDownDirective,
        CommonModule

    ],
    //entryComponents: [AlertComponenet]
})


export class SharedModule{

}