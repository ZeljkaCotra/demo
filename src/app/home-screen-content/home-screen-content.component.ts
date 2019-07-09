import { Utility } from './../common/utility';
import { HttpService } from './../service/http.service';
import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../service/shared.service';


@Component({
  selector: 'home-screen-content',
  templateUrl: './home-screen-content.component.html',
  styleUrls: ['./home-screen-content.component.scss']
})
export class HomeScreenContentComponent implements OnInit {

  data: any[];
  totalSteps: number = 0;
  burnedCalories: number;
  minutes: number;
  hours: number;
  distance: number;
  @Input('isLiked') isButtonClicked: boolean = false;

  constructor(private service: HttpService, private ss: SharedService) {
    this.ss = ss;
  }

  ngOnInit() {
    this.service.getData()
      .subscribe(response => {
        this.data = response.json();
        this.totalSteps = Utility.totalSteps(this.data);
        this.burnedCalories = this.totalSteps * 0.05;
        this.minutes = Math.round((this.totalSteps * 0.5 / 60) % 60);
        this.hours = Math.floor(this.totalSteps * 0.5 / 3600);
      })


    this.ss.getEmittedValue().subscribe(
      (d) => {
        this.totalSteps = 0;
        this.isButtonClicked = true;
        let self = this;
        this.data.forEach(function (item, index) {
          let day = Utility.findDayInTimestamp(item.timestamp);
          if (day === d.num) {
            self.totalSteps += item.steps;
          }
        });
        self.burnedCalories = self.totalSteps * 0.05;
        self.hours = Math.floor(self.totalSteps * 0.5 / 3600);
        self.distance = Math.round(self.totalSteps * 0.762);
      }
    );
  }

}