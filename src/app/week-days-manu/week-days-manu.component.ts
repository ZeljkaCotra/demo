import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'week-days-manu',
  templateUrl: './week-days-manu.component.html',
  styleUrls: ['./week-days-manu.component.scss']
})
export class WeekDaysManuComponent implements OnInit {

  @Input('isClicked') isClicked: boolean;
  @Output('change') change = new EventEmitter();

  clicked = -1;

  days = [
    {id: 1, name:'MON', num:10},
    {id: 2, name:'TUE', num:11},
    {id: 3, name:'WED', num:12},
    {id: 4, name:'THU', num:13},
    {id: 5, name:'FRI', num:14}
  ]

  constructor() { }

  ngOnInit() {
  }

  onClick(event) {
    this.isClicked = !this.isClicked;
    this.clicked = event.target.id;
    console.log(event.target.id);
    this.change.emit();
  }

}
