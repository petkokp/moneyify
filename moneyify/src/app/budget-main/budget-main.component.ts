import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.module';

@Component({
  selector: 'app-budget-main',
  templateUrl: './budget-main.component.html',
  styleUrls: ['./budget-main.component.css']
})
export class BudgetMainComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
  }

}
