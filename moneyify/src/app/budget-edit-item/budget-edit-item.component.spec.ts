import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetEditItemComponent } from './budget-edit-item.component';

describe('BudgetEditItemComponent', () => {
  let component: BudgetEditItemComponent;
  let fixture: ComponentFixture<BudgetEditItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetEditItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetEditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
