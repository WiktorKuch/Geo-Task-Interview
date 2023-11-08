import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  resetStatus: boolean = true;
  reset_succeeded: boolean|undefined;

  resetForm : FormGroup = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.email]),
    
  })

  constructor(private snackBar: MatSnackBar){}

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    
    if (this.resetStatus) {
      this.snackBar.open('Zresetowano pomyślnie. Hasło zostało wysłane na twój adress email' , 'kod 200', { duration: 3000 });
      
    } else {
      this.snackBar.open('Nieudany reset', 'kod 401', { duration: 3000 });
    }
  }
}
