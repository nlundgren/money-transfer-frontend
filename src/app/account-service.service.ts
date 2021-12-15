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

  public findAll(): Observable<Account[]> {
    return this.http.get<Account[]>(`${this.accountsUrl}/accounts`);
  }

  public findOne(id: string | null): Observable<Account> {
    return this.http.get<Account>(`${this.accountsUrl}/accountById/${id}`);
  }

  public findAllTransfers(id: string | null): Observable<Transfer[]> {
    return this.http.get<Transfer[]>(`${this.accountsUrl}/transfer/${id}`);
  }
  public save(account: Account) {
    return this.http.post<Account>(`${this.accountsUrl}/register`, account);
  }

  public login(account: Account) {
    return this.http.post<Account>(`${this.accountsUrl}/login`, account);
  }

  public createTransfer(transfer: Transfer) {
    return this.http.post<Transfer>(`${this.accountsUrl}/addTransfer`, transfer);
  }
}
