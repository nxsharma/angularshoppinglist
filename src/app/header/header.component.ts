import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{
    isAuthenticated = false;
    private userSub: Subscription;
    
    constructor(private dataStorageService: DataStorageService, private authService: AuthService){}
    collapsed = true;
    // @Output() featureSelected = new EventEmitter<string>();

    // onSelect(feature: string){

    //     this.featureSelected.emit(feature);
    // }

    ngOnInit(): void {
        this.userSub = this.authService.user.subscribe(user =>{
            this.isAuthenticated = !user ? false: true;
        });
        
    }

    ngOnDestroy(): void {
        this.userSub.unsubscribe();
    }
    onSaveData(){
        this.dataStorageService.storeRecipes();
    }

    onFetchData(){
        this.dataStorageService.fetchRecipes().subscribe();
    }

    onLogout(){
        this.authService.logout();
    }
}