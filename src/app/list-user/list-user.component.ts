import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Data} from '../interfaces/delete.interface';
import { ListUsersService } from '../services/list-users.service';
import { UserService } from '../services/users.service';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  
  public data!: Data;
  users: any = [];
  filteredString: string = '';
  status!: string;
  errorMessage: any;
  public currentUrl = "https://reqres.in/api/users/2"
  public user: Data = {id: 0, email:'', avatar: '', first_name: '', last_name: ''};

  constructor(private listUserService: ListUsersService, private http: HttpClient, private UsersSvc: UserService) { }

  ngOnInit(): void { 
    this.listUserService.getUsers()
      .subscribe(users => {
        //console.log(users);
        this.users = users;
      });
  }

  delete(id:number) {
    this.listUserService.delete(`${this.currentUrl}/${id}`).subscribe(
      response =>  {
       // this.data = this.data.filter(value => value.id !== id);
        console.log(response);
      });
  }
}



  //private getUsers(): void{
  // this.listUser.getUsers().pipe(tap((listarUser: listar[]) => this.listarUser = listarUser)).subscribe();
  // }

