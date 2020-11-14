import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget-item.module';

@Component({
  selector: 'app-budget-add-item-form',
  templateUrl: './budget-add-item-form.component.html',
  styleUrls: ['./budget-add-item-form.component.css']
})
export class BudgetAddItemFormComponent implements OnInit {

  @Input() item: BudgetItem = new BudgetItem('', null);

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    
  }

}
