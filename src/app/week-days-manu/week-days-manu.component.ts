import { SharedService } from './../service/shared.service';
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
    { id: 1, name: 'MON', num: 10 , date:'June 10, 2019'},
    { id: 2, name: 'TUE', num: 11 , date:'June 11, 2019'},
    { id: 3, name: 'WED', num: 12 , date:'June 12, 2019'},
    { id: 4, name: 'THU', num: 13 , date:'June 13, 2019'},
    { id: 5, name: 'FRI', num: 14 , date:'June 14, 2019'}
  ]

  constructor(private ss : SharedService) { 
    this.ss = ss;
  }

  ngOnInit() {
  }

  onClick(event) {
    this.isClicked = !this.isClicked;
    this.clicked = event.target.id;
    this.change.emit();
    let day = this.days[this.clicked -1];
    this.ss.change(day);
  }

}
