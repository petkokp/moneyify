import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BudgetMainComponent } from './budget-main/budget-main.component';
import { LearningComponent } from './learning/learning.component';
import { TaskViewComponent } from './task-manager/task-view/task-view.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'budget-calculator', component: BudgetMainComponent },
    { path: 'learning', component: LearningComponent },
    { path: 'task-manager', component: TaskViewComponent },
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