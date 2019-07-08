import { SharedService } from './../service/shared.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Utility } from './../common/utility';

@Component({
  selector: 'review-header',
  templateUrl: './review-header.component.html',
  styleUrls: ['./review-header.component.scss']
})
export class ReviewHeaderComponent implements OnInit {

  @Input('day') day: string = "Welcome!";
  @Input('date') date: string = "Overview of your activity";
  @Input('isLiked') isButtonClicked: boolean;

  constructor(private ss: SharedService) {
    this.ss = ss;
  }

  ngOnInit() {
    this.ss.getEmittedValue().subscribe(
      (d) => {
        this.day = Utility.dayOfWeekAsString(d.id - 1);
        this.date = d.date;
        this.isButtonClicked = ! this.isButtonClicked;
      }
    );
  }

}