import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'task-client';

  public isLogin:boolean = false;
  public currentUser;

  ngOnInit(){
    let checkLogin = localStorage.getItem('token');
    this.isLogin = checkLogin ? true : false ;
  }

  isPermission(event){
    this.isLogin = event
  }
}
