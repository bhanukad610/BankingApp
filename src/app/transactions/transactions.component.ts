import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  routes = [
    {linkname : 'Transactions-accounts', url : 'transactions-accounts'},
    {linkname : 'Transactions-agent', url : 'transactions-agent'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
