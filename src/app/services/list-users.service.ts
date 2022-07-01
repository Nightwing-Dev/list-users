import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Data} from "../interfaces/delete.interface";
import { Listar } from "../interfaces/listar.interface";
import { User } from "../interfaces/user";




@Injectable({
    providedIn: 'root'
})


export class ListUsersService {
    
    private urldelete = "https://reqres.in/api/users?page=2"

    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get<Listar>("https://reqres.in/api/users?page=2")
            .pipe(
                map(resp => {
                    return resp.data.map(user => {
                        return new User(user.id, user.email, user.first_name, user.last_name, user.avatar)
                    })
                }

                ));

    };
   // deleteUsers(id:number) {
      //    return this.http.delete<Data>("https://reqres.in/api/users/2"+id)
      delete(url: string) {
        return this.http.delete<Data>(this.urldelete + url);
    }
}
