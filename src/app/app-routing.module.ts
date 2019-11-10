import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { NofundComponent } from './page/nofund/nofund.component';
import { AddTaskComponent } from './page/add-task/add-task.component';
import { ListTaskComponent } from './page/list-task/list-task.component';
import { EditTaskComponent } from './page/edit-task/edit-task.component';
import { DetailComponent } from './page/detail/detail.component';

const routes: Routes = [
  {
    path: "home", component: HomeComponent
  },
  {
    path:"addtask",
    component:AddTaskComponent
  },
  {
    path:"listtask",
    component: ListTaskComponent
  },
  {
    path:"edittask",
    component: EditTaskComponent
  },
  {
    path: "detail/:id",
    component: DetailComponent
  },
  {
    path: "", redirectTo:"/home", pathMatch: "full"
  },
  {
    path:"**", component: NofundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
