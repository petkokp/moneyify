import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { TaskViewComponent } from './task-manager/task-view/task-view.component';
import { NewListComponent } from './task-manager/new-list/new-list.component';
import { NewTaskComponent } from './task-manager/new-task/new-task.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { WebReqInterceptor } from './web-req.interceptor.service';
import { RegisterPageComponent } from './register-page/register-page.component';
import { EditListComponent } from './task-manager/edit-list/edit-list.component';
import { EditTaskComponent } from './task-manager/edit-task/edit-task.component';
import { AuthGuard } from './auth.guard';
import { FaqComponent } from './faq/faq.component';

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
    BudgetEditItemComponent,
    TaskViewComponent,
    NewListComponent,
    NewTaskComponent,
    LoginPageComponent,
    RegisterPageComponent,
    EditListComponent,
    EditTaskComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: WebReqInterceptor, multi: true },
    AuthGuard
  ],
  entryComponents: [BudgetEditItemComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
