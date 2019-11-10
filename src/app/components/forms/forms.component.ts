import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { addTask } from '../../model/task.model';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const submitComment = gql`
  mutation newTask($input:CreateNewTask!) {
    createTask(input:$input){
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

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit, OnChanges {

  @Input() employees: string[];

  public commonForm = new FormGroup({
    taskName: new FormControl(''),
    priority: new FormControl(''),
    publisher: new FormControl({
      value: this._login.currentMe()['name'],
      disabled: true
    }),
    executor: new FormControl(''),
    deadline: new FormControl(''),
    desc: new FormControl('')
  })

  constructor(
    private _apollo: Apollo, 
    private _login: LoginService,
    public _router:Router  
  ) { }

  ngOnInit() {

  }

  ngOnChanges(){
    console.log(this.employees)
  }

  onSubmit(){
    let value = this.commonForm.value;
    let input: addTask = {
      taskName: value.taskName,
      desc: value.desc,
      deadline: value.deadline,
      priority: value.priority,
      publisher: this._login.currentMe()['_id'],
      executor: value.executor
    }

    this._apollo.mutate({
      mutation: submitComment,
      variables: { input },
    }).subscribe(res => this._router.navigate(['/listtask']), error => error);

  }

}
