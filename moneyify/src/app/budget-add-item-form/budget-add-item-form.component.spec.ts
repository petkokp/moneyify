import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetAddItemFormComponent } from './budget-add-item-form.component';

describe('BudgetAddItemFormComponent', () => {
  let component: BudgetAddItemFormComponent;
  let fixture: ComponentFixture<BudgetAddItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetAddItemFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetAddItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
