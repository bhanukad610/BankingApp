import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountsComponent } from './accounts/accounts.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { RegisterComponent } from './register/register.component';
import { TransactionsAccountComponent } from './transactions-account/transactions-account.component';
import { TransactionsAgentComponent } from './transactions-agent/transactions-agent.component';
import { AccountsSavingsComponent } from './accounts-savings/accounts-savings.component';
import { AccountsFixedComponent } from './accounts-fixed/accounts-fixed.component';

const routes: Route[] = [
 {path : '', redirectTo: '/home', pathMatch : 'full'},
 {path : 'home', component : HomeComponent},
 {path : 'register', component : RegisterComponent},
 {path : 'accounts',
  component : AccountsComponent,
  children : [
    {path : '', redirectTo: 'accounts', pathMatch : 'full'},
    {path : 'accounts-savings', component : AccountsSavingsComponent},
    {path : 'accounts-fixed', component : AccountsFixedComponent},
  ]},
 {
   path : 'transactions', 
   component : TransactionsComponent,
   children : [
    {path : '', redirectTo: 'transactions', pathMatch : 'full'},
    {path : 'transactions-agent', component : TransactionsAgentComponent},
    {path : 'transactions-accounts', component : TransactionsAccountComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
