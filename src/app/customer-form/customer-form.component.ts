import { Component, OnInit } from '@angular/core';
import { NewCustomer } from '../new-customer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }


  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done

}
