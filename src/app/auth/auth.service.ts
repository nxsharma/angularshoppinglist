import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

export interface AuthResponseData{
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    localId: string;
    registered?: boolean;
}
@Injectable({providedIn : 'root'})

export class AuthService{
    constructor(private http: HttpClient) {}

    signup(email: string, password: string){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCVk1mYOd8PmIOGoKiFYfrBIEORgrlq2wo',
        {
            email: email,
            password: password,
            returnSecureToken: true
        
        }
        ).pipe(catchError(this.handleError));
    }

    login(email: string, password: string){
       return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCVk1mYOd8PmIOGoKiFYfrBIEORgrlq2wo',
        {
            email: email,
            password: password,
            returnSecureToken: true
        
        }
        ).pipe(catchError(this.handleError));
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