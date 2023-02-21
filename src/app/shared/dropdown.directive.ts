import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    
    selector: "[appDropDown]",
    exportAs: "appDropDown",
})
export class DropDownDirective{
    private wasInside = false;
    @HostBinding('class.show') isOpen = false;
    
    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
        this.wasInside = true;
    }

    @HostListener("document:click") clickout() {
        if (!this.wasInside) {
          this.isOpen = false;
        }
        this.wasInside = false;
      }
}
//https://kyrcha.info/bits/angular-directive-to-toggle-a-bootstrap-dropdown-button