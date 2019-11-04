import { Component, OnInit, OnDestroy } from '@angular/core';
import { GetEmployeeService } from '../../service/getEmployee.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  private employees: string[];

  constructor(
    private _getEmployee: GetEmployeeService
  ) { }

  ngOnInit() {
    this._getEmployee.getAllEmployees().subscribe(res => {
      if (res) this.employees = [...res.allemployeers]
    })
  }

}
