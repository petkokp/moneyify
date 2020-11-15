import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BudgetMainComponent } from './budget-main/budget-main.component';
import { LearningComponent } from './learning/learning.component';
import { BudgetAddItemFormComponent } from './budget-add-item-form/budget-add-item-form.component';
import { BudgetItemListComponent } from './budget-item-list/budget-item-list.component';
import { BudgetItemCardComponent } from './budget-item-list/budget-item-card/budget-item-card.component';
import { BudgetEditItemComponent } from './budget-edit-item/budget-edit-item.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BudgetMainComponent,
    LearningComponent,
    BudgetAddItemFormComponent,
    BudgetItemListComponent,
    BudgetItemCardComponent,
    BudgetEditItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [BudgetEditItemComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
