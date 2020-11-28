import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BudgetMainComponent } from './budget-main/budget-main.component';
import { LearningComponent } from './learning/learning.component';
import { TaskViewComponent } from './task-manager/task-view/task-view.component';
import { NewListComponent } from './task-manager/new-list/new-list.component';
import { NewTaskComponent } from './task-manager/new-task/new-task.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { EditListComponent } from './task-manager/edit-list/edit-list.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'budget-calculator', component: BudgetMainComponent },
    { path: 'learning', component: LearningComponent },
    { path: 'task-manager', component: TaskViewComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterPageComponent },
    { path: 'task-manager/new-list', component: NewListComponent },
    { path: 'task-manager/:listId', component: TaskViewComponent },
    { path: 'task-manager/edit-list/:listId', component: EditListComponent },
    { path: 'task-manager/:listId/new-task', component: NewTaskComponent },
  ]

  @NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
  })
export class AppRoutingModule { }