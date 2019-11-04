import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
      value:"cathy",
      disabled: true
    }),
    executor: new FormControl(''),
    deadline: new FormControl(''),
    desc: new FormControl('')
  })

  constructor(
    private _apollo: Apollo
  ) { }

  ngOnInit() {
    
  }

  ngOnChanges(){
    console.log(this.employees)
  }

  onSubmit(){
    let value = this.commonForm.value
    this._apollo.mutate({
      mutation: submitComment,
      variables: {
        input: {
          taskName: value.taskName,
          desc: value.desc,
          deadline: value.deadline,
          priority: value.priority,
          publisher: "5db6f75cada3440f6227b52b",
          executor: value.executor
        }
      },
    }).subscribe(res => console.log(res));
    console.log(this.commonForm.value)
  }

}
