import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, tap } from "rxjs/operators";
import { BehaviorSubject, Subject, throwError } from "rxjs";
import { User } from "./user.model";

export interface AuthResponseData{
    kind: string;
    idToken: string;
    email: string;
    expiresIn: string;
    refreshToken: string;
    localId: string;
    registered?: boolean;
}
@Injectable({providedIn : 'root'})

export class AuthService{
    user = new BehaviorSubject<User>(null);
    
    constructor(private http: HttpClient) {}

    signup(email: string, password: string){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCVk1mYOd8PmIOGoKiFYfrBIEORgrlq2wo',
        {
            email: email,
            password: password,
            returnSecureToken: true
        
        }
        ).pipe(catchError(this.handleError), tap(resData => {
           this.handleAuthentication(resData.email, resData.localId,resData.idToken, +resData.expiresIn )
        }));
    }

    login(email: string, password: string){
       return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCVk1mYOd8PmIOGoKiFYfrBIEORgrlq2wo',
        {
            email: email,
            password: password,
            returnSecureToken: true
        
        }
        ).pipe(catchError(this.handleError),tap(resData => {
            this.handleAuthentication(resData.email, resData.localId,resData.idToken, +resData.expiresIn )
         }));
    }

    private handleAuthentication(email: string,userId: string, token: string, expiresIn: number){

        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000)
        const user = new User(email, userId, token, expirationDate);
        this.user.next(user);
    }

    private handleError(errorRes: HttpErrorResponse){
        let errorMessage = 'An unknown error occurred!';

            if(!errorRes.error || !errorRes.error.error){
                return throwError(errorMessage);
            }
            console.log(errorRes);
            switch(errorRes.error.error.message){
                
                case 'EMAIL_EXISTS':
                    errorMessage = 'This email already exists';
                    break;
                case 'INVALID_LOGIN_CREDENTIALS':
                    errorMessage = 'The email does not exist';
                    break;
              
            }
            
            return throwError(errorMessage);

    }
}