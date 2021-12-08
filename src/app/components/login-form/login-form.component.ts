import { Component, Input, OnInit } from '@angular/core';
import { Account } from '../../account';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

  constructor() { }


  @Input()
  account: Account = new Account;

  @Input()
  step: string = "";


  ngOnInit(): void {
    console.log(this.step)
  }

  onSubmit(): void {

  }

}
