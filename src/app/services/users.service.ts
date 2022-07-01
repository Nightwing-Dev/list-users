import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Data } from "../interfaces/delete.interface";



@Injectable({
    providedIn: 'root'
})

export class UserService {
    private apiUrl = 'https://reqres.in/api/login';
    constructor(private http: HttpClient) {
    }

    login(user: any): Observable<any> {
        return this.http.post("https://reqres.in/api/login", user);
    }

    createUser(data:any): Observable<any> {
        return this.http.post<Data>("https://reqres.in/api/users", data);
    }

 //   deleteUser(): Observable<deleteUser> {
  //      return this.http.delete<deleteUser>("htts://reqres.in/api/users/2");
    //}

    setToken(token: string): void {
        localStorage.setItem('token', token);
    }
    getToken(): string | null {
        return localStorage.getItem('token');
    }
    isLoggedIn() {
        return this.getToken() === null;
    }

}

//hola