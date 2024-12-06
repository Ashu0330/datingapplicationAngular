import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from './model/apiresponse';
import { usermodel } from './model/usemodel';
import { loginmodel } from './model/loginmodel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getall() {
    return this.http.get<ApiResponse<usermodel>>("https://localhost:7138/api/User/GetUsers")

  }
  loginmethod(username: string, password: string) {
    return this.http.get<ApiResponse<boolean>>(`https://localhost:7138/api/User/Login?username=${username}&password=${password}`);
  }


}
