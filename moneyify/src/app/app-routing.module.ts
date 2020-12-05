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
import { EditTaskComponent } from './task-manager/edit-task/edit-task.component';
import { AuthGuard } from './auth.guard';
import { FaqComponent } from './faq/faq.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'budget-calculator', component: BudgetMainComponent, canActivate: [AuthGuard] },
    { path: 'learning', component: LearningComponent, canActivate: [AuthGuard] },
    { path: 'task-manager', component: TaskViewComponent, canActivate: [AuthGuard] },
    { path: 'faq', component: FaqComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterPageComponent },
    { path: 'task-manager/new-list', component: NewListComponent, canActivate: [AuthGuard] },
    { path: 'task-manager/:listId', component: TaskViewComponent, canActivate: [AuthGuard] },
    { path: 'task-manager/edit-list/:listId', component: EditListComponent, canActivate: [AuthGuard] },
    { path: 'task-manager/:listId/new-task', component: NewTaskComponent, canActivate: [AuthGuard] },
    { path: 'task-manager/:listId/edit-task/:taskId', component: EditTaskComponent, canActivate: [AuthGuard] },
    { path: '**', component: PageNotFoundComponent }
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