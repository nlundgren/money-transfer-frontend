import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AccountFormComponent } from './components/account-form/account-form.component';
import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'accounts', component: AccountListComponent },
  { path: 'addaccount', component: AccountFormComponent },
  { path: 'account', component: AccountComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
