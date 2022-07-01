import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Data } from '../interfaces/delete.interface';
import { UserService } from '../services/users.service';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
 
  users: any = [];
  public dataUser!: Data[];
  public useradd: Data = {id: 0, email:'', avatar: '', first_name: '', last_name: ''};

  constructor(private router: Router, public usersService: UserService) { }

  createUserForm = new FormGroup({
    name: new FormControl('', Validators.required),
    job: new FormControl('', Validators.required)
  });

  createUser() {


    const user = { create: this.createUserForm.value };
    this.usersService.createUser(user).subscribe(data => {
      this.users.push(user)
      console.log(data)
      this.usersService.setToken(data.token)
    });

  //  let name = document.getElementById('name').value;
    if (this.createUserForm.valid) {
      window.alert('usuario creado correctamente');
    }
    // console.log(this.createUserForm.value);
    this.router.navigate(['listarusuario']);
  }

  ngOnInit(): void {
    this.usersService.createUser({
      name: "morpheus",
      job: "leader"
    });
  }
  onSubmit(): void {
    console.log('');
  }
}
