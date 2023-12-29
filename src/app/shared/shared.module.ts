import { NgModule } from '@angular/core';

import { AlertComponenet } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PlaceHolderDirective } from './placeholder/placeholder.directive';
import { DropDownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';
import { LoggingService } from '../logging.service';


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
    providers: [LoggingService] //instead of this use injectable wherever you need the service otherwise you may end up with multiple instances and bugs
    //entryComponents: [AlertComponenet]
})


export class SharedModule{

}