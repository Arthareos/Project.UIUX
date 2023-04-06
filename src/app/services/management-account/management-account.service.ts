import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ManagementAccountService {

  registerURL = "/auth/register";
  loginURL = "/auth/authenticate";

  constructor(private http: HttpClient) {

  }

  register(registerData1: any): Observable<any>{
    return this.http.post('localhost:8080' + this.registerURL,registerData1);
  }

  login(loginData: any): Observable<any>{
    return this.http.post('localhost:8080' + this.loginURL,loginData);
  }
}
