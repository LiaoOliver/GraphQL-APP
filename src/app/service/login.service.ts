import { Injectable } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const login = gql`
  mutation login($email:String! $password:String!){
  login(email:$email password:$password){
    token
    user{
      _id
      name
      email
      role
    }
  }
}
`;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _apollo: Apollo) { }

  sendLogin(payload){
    return this._apollo.mutate({
      mutation: login,
      variables:{
        email: payload.account,
        password: payload.password
      }
    })
  }

  currentMe(){
    return JSON.parse(localStorage.getItem('currentUser'));
  }
}
