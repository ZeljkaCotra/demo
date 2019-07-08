import { Utility } from './../common/utility';
import { HttpService } from './../service/http.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'home-screen-content',
  templateUrl: './home-screen-content.component.html',
  styleUrls: ['./home-screen-content.component.scss']
})
export class HomeScreenContentComponent implements OnInit {

  data: any[];
  totalSteps: number;
  burnedCalories: number;
  minutes: number;
  hours: number;

  constructor(private service: HttpService) { }

  ngOnInit() {
    this.service.getData()
      .subscribe(response => {
        this.data = response.json();
        this.totalSteps= Utility.totalSteps(this.data);
        this.burnedCalories = this.totalSteps * 0.05;
        this.minutes = Math.round((this.totalSteps * 0.5/60)%60);
        this.hours = Math.floor (this.totalSteps * 0.5/3600);
        console.log(this.data);
      })
  }

}