import { Component, Input, OnInit } from '@angular/core';
import { Account } from '../../account';
import { AccountService } from '../../account-service.service';
import jwt_decode from "jwt-decode";
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router) {
    form: FormGroup;
  }


  @Input()
  account: Account = new Account;


  @Input()
  step: string = "";


  ngOnInit(): void {
    console.log(this.step)
  }

  goToProfile() {
    this.router.navigateByUrl("account")
  }

  onSubmit(): void {
    if (this.step == "register") {
      this.accountService.save(this.account).subscribe((result: any) => console.log(result));
    } else {
      this.accountService.login(this.account).subscribe({
        next: (response: any) => {
          console.log(response)
          localStorage.setItem("token", response.jwt);
          this.goToProfile();
        }

      });
    }

  }


}
