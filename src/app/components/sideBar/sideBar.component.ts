import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-sideBar',
  templateUrl: './sideBar.component.html',
  styleUrls: ['./sideBar.component.css']
})
export class SideBarComponent implements OnInit {

  private name: string;
  private dept: string;

  constructor(private _login: LoginService) { }

  ngOnInit() {
    let user = this._login.currentMe();
    this.name = user['name'];
    this.dept = user['role']
  }

}
