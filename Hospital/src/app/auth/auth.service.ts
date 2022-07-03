import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Subject, tap, throwError } from 'rxjs';
import { User } from './user.model';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localid: string;
  registerd?: boolean; //This is optional and only used when signing in.
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  // We store the user here. As a subject.
  user = new Subject<User>();

  constructor(private http: HttpClient) {}

  // Here is the code to handle SignUp.
  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAzqO0ms7xHjFC2bjtu2Lf6dCe8fD-75Bw',
        { email: email, password: password, returnSecureToken: true }
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localid,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  // Here the Code for handling Login
  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAzqO0ms7xHjFC2bjtu2Lf6dCe8fD-75Bw',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localid,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'The password is invalid.';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = `Email id doesn't exist. Please Signup.`;
        break;
    }
    return throwError(errorMessage);
  }
}
