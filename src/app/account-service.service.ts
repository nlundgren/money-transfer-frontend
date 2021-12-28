import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from './account';
import { Transfer } from './transfer';
import { Observable } from 'rxjs';




@Injectable()
export class AccountService {

  private accountsUrl: string;

  constructor(private http: HttpClient) {
    this.accountsUrl = 'http://localhost:8080';
  }


  isLoggedIn() {
    let token = localStorage.getItem("token")
    if (token)
      return true;
    else
      return false;
  }
  getToken() {
    let token = localStorage.getItem("token") || null
    return token;
  }

  public findAll(): Observable<Account[]> {
    return this.http.get<Account[]>(`${this.accountsUrl}/users`);
  }

  public findOne(email: string | null): Observable<Account> {
    return this.http.get<Account>(`${this.accountsUrl}/user/${email}`);
  }

  public findAllTransfers(id: string | null): Observable<Transfer[]> {
    return this.http.get<Transfer[]>(`${this.accountsUrl}/transfer/${id}`);
  }
  public save(account: Account) {
    return this.http.post<Account>(`${this.accountsUrl}/users`, account);
  }

  public login(account: Account) {
    return this.http.post(`${this.accountsUrl}/login`, account)
  }

  public createTransfer(transfer: Transfer) {
    return this.http.post<Transfer>(`${this.accountsUrl}/transfer`, transfer);
  }
}
