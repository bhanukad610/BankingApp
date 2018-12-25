import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  routes = [
    {linkname : 'Accounts-Savings', url : 'accounts-savings'},
    {linkname : 'Accounts-Fixed', url : 'accounts-fixed'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
