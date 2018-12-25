import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AccountsComponent } from './accounts/accounts.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { HomeComponent } from './home/home.component';
import { TransactionsAccountComponent } from './transactions-account/transactions-account.component';
import { TransactionsAgentComponent } from './transactions-agent/transactions-agent.component';
import { AccountsSavingsComponent } from './accounts-savings/accounts-savings.component';
import { AccountsFixedComponent } from './accounts-fixed/accounts-fixed.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AccountsComponent,
    TransactionsComponent,
    HomeComponent,
    TransactionsAccountComponent,
    TransactionsAgentComponent,
    AccountsSavingsComponent,
    AccountsFixedComponent,
    CustomerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
