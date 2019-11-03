import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.commonForm)
  }

}
