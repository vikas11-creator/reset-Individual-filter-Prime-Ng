import { Component } from "@angular/core";
import { Customer, Representative } from "./customer";
import { CustomerService } from "./customerservice";

import { ViewChild } from '@angular/core'
import { Table } from "primeng/table";
import { Dropdown } from "primeng/dropdown";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  @ViewChild("mydt", { static: false }) public mydt: Table;
  @ViewChild("filterstatus", {static: false}) public filterstatus: Dropdown;

  customers: Customer[];
  loading: boolean = true;
  
  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService.getCustomersLarge().then(customers => {
      this.customers = customers;
      this.loading = false;
      this.customers.forEach(
        customer => (customer.date = new Date(customer.date))
      );
    });
  }


  set(table: any) 
  {
      //  THIS WORKS
      this.mydt.filter("c", 'name', 'startsWith');
      this.mydt.filter("e", 'country.name', 'startsWith');
	}  


  clear(table: any) 
  {
      //  THIS DOES NOT WORK!!   Filter stops working after clearing
      table.clear();

	}  

}
