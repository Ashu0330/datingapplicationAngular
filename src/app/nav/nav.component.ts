import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserService } from '../service/user.service'; import { IfStmt } from '@angular/compiler';
import { usermodel } from '../service/model/usemodel';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  form: FormGroup;
  constructor(private service: UserService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      username: [null],
      password: [null]
    });
  }

  login() {
    let data = this.form.value;
    this.service.loginmethod(data).subscribe((res: any) => {
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
