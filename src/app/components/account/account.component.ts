import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../../account';
import { AccountService } from '../../account-service.service';
import { ActivatedRoute, Router } from '@angular/router'
import { Transfer } from '../../transfer';
import jwt_decode from "jwt-decode";


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.sass']
})
export class AccountComponent implements OnInit {

  transfer: Transfer
  account: Account = new Account;
  transfers: Transfer[] = []
  id!: string | null;
  accounts: Account[] = [];

  constructor(private accountService: AccountService, private route: ActivatedRoute, private router: Router) {
    this.transfer = new Transfer()
  }


  decodeToken() {
    let token = localStorage.getItem("token");
    if (token) {
      const decoded: any = jwt_decode(token);
      this.account.email = decoded.sub
      console.log(decoded.fromId)
    }
  }

  loadAccount() {
    this.accountService.findOne(this.account.email).subscribe((data: Account) => {
      this.account = data;
      console.log(this.account.id)
      this.accountService.findAllTransfers(this.account.id).subscribe((data: Transfer[]) => {
        this.transfers = data;
      })
      this.transfer.fromId = this.account.id
    });

  }

  logout() {
    localStorage.clear()
    this.router.navigateByUrl("");
  }

  ngOnInit() {

    this.decodeToken()
    this.loadAccount()


    this.accountService.findAll().subscribe((data: any[]) => {
      this.accounts = data;
    });

  }


  onSubmit() {
    this.accountService.createTransfer(this.transfer).subscribe((result: any) => this.transfers.push(result))
    this.account.balance = this.account.balance - this.transfer.amount;
    this.transfer = { fromId: this.account.id, toId: '', amount: 0, concept: '' }

  }
}
