import { Injectable } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const tasks = gql`
  query showAll{
    allTasks{
      _id
      name
      desc
      priority
      deadline
      publisher
      publishDate
      executor
      finishedDate
      isAssign
      isFinished
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class GetAllTaskService implements OnInit{

  public data: Observable<any>;
  constructor(private _apollo: Apollo) { }

  ngOnInit() {
    this.getData()
  }

  getData(){
    return this.data = this._apollo.watchQuery({ query: tasks}).valueChanges.pipe(map(({data}) => data))
  }

}
