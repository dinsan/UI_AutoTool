import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Chart from 'chart.js'

@Component({
  selector: 'app-week-locals',
  templateUrl: './week-locals.component.html',
  styleUrls: ['./week-locals.component.css']
})
export class WeekLocalsComponent implements OnInit {
  @ViewChild("chart")
  public refChart: ElementRef;

  public chartData: any;

  public constructor() { 
    this.chartData = {};
  }

  public ngOnInit() { 
    this.chartData = {
      labels: [4,13,33,7,10,34,6,36,50,14,42,43,44,46,2,9,20,40,5,23,24,29,30,35,39,45,49,1,11,37,52,8,12,16,17,18,22,26,32,38,41,51,15,25,27,31,47,3,21,28,19,48],
      datasets: [{
          label: 'Number of visitirs By Weekly',
          data: [16,13,13,12,11,11,10,10,10,9,9,9,9,9,8,8,8,8,7,7,7,7,7,7,7,7,7,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,4,3,3,3,2,2],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
    };
  }

  public ngAfterViewInit() { 
    let chart = this.refChart.nativeElement;
    let ctx = chart.getContext("2d");
    let myChart = new Chart(ctx, {
        type: 'line',
        data: this.chartData,
        options: {
            
        }
    });
  }

}
