import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account-service.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.sass']
})
export class AccountListComponent implements OnInit {

  accounts: Account[] = [];

  constructor(private accountService: AccountService) {
  }

  ngOnInit() {
    this.accountService.findAll().subscribe((data: any[]) => {
      this.accounts = data;
    });
  }
}
