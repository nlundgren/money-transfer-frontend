import { Component, Input, OnInit } from '@angular/core';
import { Account } from '../../account';
import { AccountService } from '../../account-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

  constructor(private accountService: AccountService) { }


  @Input()
  account: Account = new Account;


  @Input()
  step: string = "";


  ngOnInit(): void {
    console.log(this.step)
  }

  onSubmit(): void {
    if (this.step == "register") {
      this.accountService.save(this.account).subscribe((result: any) => console.log(result));
    } else {
      this.accountService.login(this.account).subscribe((result: any) => console.log(result));
    }
  }
}
