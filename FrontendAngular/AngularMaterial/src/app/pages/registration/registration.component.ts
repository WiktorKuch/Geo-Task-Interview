import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  hide: boolean = true;
  hideConfirmPassword: boolean = true;
  registerStatus: boolean = true;
  register_succeeded: boolean|undefined;

  passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(this.passwordPattern),
    ]),
    confirmPassword: new FormControl('', [Validators.required]),
  });
  
  
  

  constructor(private snackBar: MatSnackBar, private httpService: HttpService){}


  ngOnInit(): void {
    
  }

  onSubmit(): void {
    
    
    if (this.registerStatus) {
      this.snackBar.open('Zarejestrowano pomyślnie', 'kod 200', { duration: 3000 });
      
    } else {
      this.snackBar.open('Nieudana rejestracja', 'kod 401', { duration: 3000 });
    }
  }
  

  

}

