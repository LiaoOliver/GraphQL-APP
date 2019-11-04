import { Injectable } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const users = gql`
  query CurrentUserForProfile {
    allemployeers {
      _id
      name
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class GetEmployeeService implements OnInit{

  public data: Observable<any>;

  constructor(private _apollo: Apollo) { }

  ngOnInit(){
    this.getAllEmployees()
  }

  getAllEmployees(){
    this.data = this._apollo.watchQuery<any>({
      query: users
    }).valueChanges.pipe(map(({ data }) => data))
    return this.data
  }

}
