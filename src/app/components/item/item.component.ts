import { Component, OnInit, Input } from '@angular/core';
import { task } from '../../model/task.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: task;

  private priority = {
    high:false,
    medium: false,
    low: false
  }

  constructor() { }

  ngOnInit() {
    console.log(this.item)
    this.showPriority();
  }

  showPriority(): void{
    this.priority[this.item.priority]=true
  }

}
