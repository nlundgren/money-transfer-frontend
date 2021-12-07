import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountFormComponent } from './account-form/account-form.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'accounts', component: AccountListComponent },
  { path: 'addaccount', component: AccountFormComponent },
  { path: 'account/:id', component: AccountComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
