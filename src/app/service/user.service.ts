import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from './model/apiresponse';
import { usermodel } from './model/usemodel';
import { loginmodel } from './model/loginmodel';
import { SignUp } from './model/signup';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getall() {
    return this.http.get<ApiResponse<usermodel>>("https://localhost:7138/api/User/GetUsers")

  }
  loginmethod(model: any) {
    return this.http.post<ApiResponse<usermodel>>(`https://localhost:7138/api/User/Login`, model);
  }

  SignUpMethod(model:any) {
    return this.http.post<ApiResponse<boolean>>('https://localhost:7138/api/User/SignUp',model)
  }

}
