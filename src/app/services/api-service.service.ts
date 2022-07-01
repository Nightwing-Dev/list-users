import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private router: Router) { }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  isLoggedIn() {
    return this.getToken() === null;
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  login({ email, password }: any): Observable<any> {
    if (email === 'dgenial@hotmail.com' && password === 'diego12345') {
      this.setToken('culo');
      return of({ name: 'diego', email: 'dgenial@hotmail.com' })
    }
    return throwError(new Error('no te puedes conectar'));
  }
}
