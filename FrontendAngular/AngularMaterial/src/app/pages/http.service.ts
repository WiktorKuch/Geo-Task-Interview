import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from './LoginResponse';

import { LoginUser } from './LoginUser';
import { RegisterUser } from './RegisterUser';
import { ResetPasswordUser } from './ResetPasswordUser';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
 

  
    private readonly baseUrl = 'http://localhost:3000';
  
    constructor(private http: HttpClient) {}
  
    public login(user: LoginUser): Observable<LoginResponse> {
      return this.http.post<LoginResponse>(`${this.baseUrl}/login`, user);
    }
  
    public register(user: RegisterUser): Observable<LoginResponse> {
      return this.http.post<LoginResponse>(`${this.baseUrl}/register`, user);
    }
  
    public resetPassword(user: ResetPasswordUser): Observable<any> {
      return this.http.post<any>(`${this.baseUrl}/reset-password`, user);
    }
  
}