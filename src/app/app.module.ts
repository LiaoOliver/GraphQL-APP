import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './shared/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { AddTaskComponent } from './page/add-task/add-task.component';
import { ListTaskComponent } from './page/list-task/list-task.component';
import { AddEmployeeComponent } from './page/add-employee/add-employee.component';
import { ListEmployeeComponent } from './page/list-employee/list-employee.component';
import { NofundComponent } from './page/nofund/nofund.component';

import { HeadComponent } from './components/head/head.component';
import { SideBarComponent } from './components/sideBar/sideBar.component';
import { FormsComponent } from './components/forms/forms.component';
import { ItemComponent } from './components/item/item.component';
import { EditTaskComponent } from './page/edit-task/edit-task.component';
import { DetailComponent } from './page/detail/detail.component';
import { TitlelineComponent } from './components/titleline/titleline.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddTaskComponent,
    ListTaskComponent,
    AddEmployeeComponent,
    ListEmployeeComponent,
    NofundComponent,
    HeadComponent,
    SideBarComponent,
    FormsComponent,
    ItemComponent,
    EditTaskComponent,
    DetailComponent,
    TitlelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
