import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms'
import { ToastrService } from "ngx-toastr";
import { User } from 'src/app/Shared/user.model';
import { UserService } from 'src/app/Shared/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";


  constructor(private userservice: UserService,private toastr : ToastrService) { }

  ngOnInit(): void {
    this.resetForm();

  }

  resetForm(form?: NgForm)
  {
    if(form != null)
    form.reset();
    this.user = {
      UserName: '',
      Password: '',
      Email:   ''

    }
  }

  OnSubmit(form: NgForm) {
    this.userservice.registerUser(form.value)
      .subscribe((data: any) => {
        if (data.Succeeded == true) {
          this.resetForm(form);
          this.toastr.success('User Profile registration successful');
        }
        else
          this.toastr.error(data.Errors[0]);
      });
  }

}
