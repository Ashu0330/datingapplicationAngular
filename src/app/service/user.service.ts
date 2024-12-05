import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from './model/apiresponse';
import { usermodel } from './model/usemodel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient){}
  getall(){
   return this.http.get<ApiResponse<usermodel>>("https://localhost:7138/api/User/GetUsers")
  }
}
