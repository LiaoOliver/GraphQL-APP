import { Component, OnInit } from '@angular/core';
import { GetAllTaskService } from '../../service/getAllTask.service';
import { task } from '../../model/task.model';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {

  public alltask: task[] | null = null;

  constructor(private _getall: GetAllTaskService) { }

  ngOnInit() {
    this._getall.getData().subscribe((res: { allTasks: task[] }) => this.alltask = res.allTasks)
  }

}
