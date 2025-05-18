import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthResponse, User } from '../shared/interfaces/auth';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  router = inject(Router);

  user = new BehaviorSubject<User | null>(null);
  private tokenExpirationTimer: any;

  // signIn(email: string, password: string) {
  signIn() {
    return this.http
      .get<AuthResponse>('http://localhost:8080/api/auth/server')
      .pipe(
        catchError(this.handleError),
        tap((resData: any) =>
          this.handleAuth(
            resData.email,
            resData.id,
            resData.token,
            resData.expiresIn,
          ),
        ),
      );
  }

  autoSignIn() {
    const userDataString: string | null = localStorage.getItem('userData');
    if (!userDataString) {
      return;
    }
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(userDataString);

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate),
    );
    if (loadedUser.token) {
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.user.next(loadedUser);
      this.autoLogOut(expirationDuration);
      this.router.navigate(['/dashboard/board']);
    }
  }

  signUp() {
    return this.http
      .get<AuthResponse>('http://localhost:8080/api/auth/server')
      .pipe(
        catchError(this.handleError),
        tap((resData: any) =>
          this.handleAuth(
            resData.email,
            resData.id,
            resData.token,
            resData.expiresIn,
          ),
        ),
      );
  }

  logOut() {
    //clear user data
    this.user.next(null);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
    this.router.navigate(['/auth']);
  }

  autoLogOut(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logOut();
    }, expirationDuration);
  }

  private handleAuth(
    email: string,
    userId: string,
    token: string,
    expiresIn: number,
  ) {
    // const expirationDate = new Date(new Date().getTime() + +resData.expiresIn * 1000);
    const expirationDate = new Date(new Date().getTime() + +2000 * 1000);

    const user = new User(
      (email = '2@2'),
      (userId = '1234'),
      (token = '123'),
      expirationDate,
    );
    this.user.next(user);
    this.autoLogOut(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
    this.router.navigate(['/dashboard/board']);
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(() => errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already.';
        break;
      default:
        errorMessage = 'An unknown error occurred!';
        break;
    }
    return throwError(() => errorMessage);
  }
}
