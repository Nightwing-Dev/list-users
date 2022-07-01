import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

 

  loginForm = new FormGroup({
    email: new FormControl(''),
    password!: new FormControl(''),
  });

  constructor(private readonly fb: FormBuilder,
    private readonly router: Router,
    public auth: AuthService) {
  }



  ngOninit(): void {
    this.loginForm = this.initForm();
  }

  //onSubmit():void{
  //console.log(this.loginForm.value);
  //}
  login() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (res) => {
          console.log(this.loginForm.value)
          this.router.navigate(['navbar'])
        }, (err: Error) => {
          alert(err.message)
        }
      );
    }
  }


  initForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }
}