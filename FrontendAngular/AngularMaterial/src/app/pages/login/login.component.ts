import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit{
  hide : boolean = true;
  passwordControl : FormControl = new FormControl('',Validators.required);
  loginStatus: boolean = true;
  login_succeeded: boolean|undefined;

  loginForm : FormGroup = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',Validators.required)
  })
  constructor(private snackBar: MatSnackBar){ }


  ngOnInit(): void {
    
  }

  onSubmit(): void {
    
   
    if (this.loginStatus) {
      this.snackBar.open('Zalogowano pomyślnie', 'kod 200', { duration: 3000 });
      
    } else {
      this.snackBar.open('Nieudane logowanie', 'kod 401', { duration: 3000 });
    }
  }

}
