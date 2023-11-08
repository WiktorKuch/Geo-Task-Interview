import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import {MatInputModule} from '@angular/material/input';
import {  MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleLoginCardComponent } from './components/google-login-card/google-login-card.component';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { ResetComponent } from './pages/reset/reset.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {  HttpClientModule } from '@angular/common/http';
import { HttpService } from './pages/http.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    GoogleLoginCardComponent,
    ResetComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule
    
    


    


  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
