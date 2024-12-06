import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserService } from '../service/user.service';import { IfStmt } from '@angular/compiler';
import { usermodel } from '../service/model/usemodel';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  username: string
  password: string
  constructor(private service: UserService) { }
  login() {
    this.service.loginmethod(this.username, this.password).subscribe((res: any) => {
      if (res.isSuccess == true) {
        alert("Login successfully");
      }
      else {
        alert('invalid username password');
      }
      // this.logindata = res.message;
    })
  }
}
