import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, map, take } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({providedIn: 'root'})
export class AuthGuard  implements CanActivate{

    constructor(private authService: AuthService, private router: Router){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        //use take so that we don't have ongoing user subscription
        return this.authService.user.pipe(take(1),map(user=>{
            const isAuth = !!user;
            if(isAuth){
                return true;
            }

            //if you try to navigate to recipe lets say without authenticatio it should redirect to auth page
            return this.router.createUrlTree(['auth']);
        }))
    }

}