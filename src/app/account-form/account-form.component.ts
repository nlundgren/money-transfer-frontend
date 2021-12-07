import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../account-service.service';
import { Account } from '../account';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.sass']
})
export class AccountFormComponent {

  account: Account;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService) {
    this.account = new Account();
  }

  onSubmit() {
    this.accountService.save(this.account).subscribe((result: any) => this.gotoAccountList());
  }

  gotoAccountList() {
    this.router.navigate(['/accounts']);
  }
}