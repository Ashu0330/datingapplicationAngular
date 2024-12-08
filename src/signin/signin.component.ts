import { Component } from '@angular/core';
import { UserService } from '../app/service/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ParseSourceFile } from '@angular/compiler';
import { SharedModule } from '../app/shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  form: FormGroup
  constructor(private service: UserService, private fb: FormBuilder,private router:Router) {
    this.Createform()
  }
  Createform() {
    this.form = this.fb.group({
      username: [null],
      email: [null],
      password: [null]

    })
  }
  SignUpMethod() {
    debugger
    this.service.SignUpMethod(this.form.value).subscribe((res: any) => {
      if (res.isSuccess = true) {
        alert("signup completed")
        this.router.navigate(['/nav'])    

      }
      else (
        "Error while SignUp"
      )
    })
  }

}
