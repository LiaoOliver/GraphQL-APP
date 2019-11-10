import { async } from '@angular/core/testing';
import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() isPermission = new EventEmitter<boolean>(false)
  public loginForm = new FormGroup({
    account: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private _login: LoginService) { }

  ngOnInit() {
  }

  onSubmit(){
    this._login.sendLogin(this.loginForm.value)
    .subscribe(({data}) => {
      let currentUser = data['login']['user']
      let token = data['login']['token']
      localStorage.setItem('currentUser', this.toJSONString(currentUser));
      localStorage.setItem('token', this.toJSONString(token));
      this.isPermission.emit(true)
    }, error => console.log(error))
  }

  toJSONString(value){
    return JSON.stringify(value)
  }

}
