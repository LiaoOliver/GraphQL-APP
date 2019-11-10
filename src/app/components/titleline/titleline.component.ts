import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-titleline',
  templateUrl: './titleline.component.html',
  styleUrls: ['./titleline.component.css']
})
export class TitlelineComponent implements OnInit {

  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
