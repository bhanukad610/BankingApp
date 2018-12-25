import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TheBank';

  routes = [
    {linkname : 'Home', url : 'home'},
    {linkname : 'Register', url : 'register'},
    {linkname : 'Transactions', url : 'transactions'},
    {linkname : 'Accounts', url : 'accounts'}
  ];
}
