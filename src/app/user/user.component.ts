import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserService } from '../service/user.service';
import { ApiResponse } from '../service/model/apiresponse';
import { usermodel } from '../service/model/usemodel';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  userlist:usermodel[] = [];

  constructor(private service:UserService)
  {
    this.getalldata()
  }
  getalldata(){
    this.service.getall().subscribe((res:any)=>{
      this.userlist=res.data;
    })
  }

}
