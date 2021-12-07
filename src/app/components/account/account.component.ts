import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../../account';
import { AccountService } from '../../account-service.service';
import { ActivatedRoute } from '@angular/router'
import { Transfer } from '../../transfer';

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

  constructor(private accountService: AccountService, private route: ActivatedRoute) {
    this.transfer = new Transfer()
  }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id')
    this.transfer.fromId = this.id

    this.accountService.findOne(this.id).subscribe((data: Account) => {
      this.account = data;
    });
    this.accountService.findAllTransfers(this.id).subscribe((data: Transfer[]) => {
      this.transfers = data;
    })
    this.accountService.findAll().subscribe((data: any[]) => {
      this.accounts = data;
    });
  }


  onSubmit() {
    this.accountService.createTransfer(this.transfer).subscribe((result: any) => this.transfers.push(result))
    this.account.balance = this.account.balance - this.transfer.amount;
    this.transfer = { fromId: this.id, toId: '', amount: 0, concept: '' }

  }
}
