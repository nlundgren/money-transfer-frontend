import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../account-service.service';
import { Account } from '../../account';


@Component({
    selector: 'app-home-root',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass']

})
export class HomeComponent {
    account: Account;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService) {
        this.account = new Account();
    }



    title = 'home';

    ngOnInit() {
        if (this.accountService.isLoggedIn()) {
            this.router.navigateByUrl("/account")
        }
    }
}