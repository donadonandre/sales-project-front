import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  standalone: true,
  imports: [],
  templateUrl: './sales-person-list.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent {

  salesPersonList: SalesPerson[] = [
    new SalesPerson('Anup', 'Kumar', 'anup.kumar@email.com', 50000),
    new SalesPerson('John', 'Doe', 'john.doe@email.com', 40000),
    new SalesPerson('Claire', 'Murphy', 'claire@email.com', 90000),
    new SalesPerson('Mai', 'Truong', 'mai@email.com', 60000)
  ];

}
