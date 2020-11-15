import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-budget-edit-item',
  templateUrl: './budget-edit-item.component.html',
  styleUrls: ['./budget-edit-item.component.css']
})
export class BudgetEditItemComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BudgetEditItemComponent>,
    @Inject(MAT_DIALOG_DATA) public item: BudgetItem) { }

  ngOnInit(): void {
  }

  onSubmitted(updatedItem: BudgetItem) {
    this.dialogRef.close(updatedItem);
  }

}
