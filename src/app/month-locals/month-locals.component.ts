
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Chart from 'chart.js'
@Component({
  selector: 'app-month-locals',
  templateUrl: './month-locals.component.html',
  styleUrls: ['./month-locals.component.css']
})
export class MonthLocalsComponent implements OnInit {
 
  @ViewChild("chart")
  public refChart: ElementRef;

  public chartData: any;

  public constructor() { 
    this.chartData = {};
  }

  public ngOnInit() { 
    this.chartData = {
      labels: ["Jan 2018",
      "Feb 2018",
      "Mar 2018",
      "Apr 2018",
      "May 2018",
      "Jun 2018",
      "Jul 2018",
      "Aug 2018",
      "Sep 2018",
      "Oct 2018",
      "Nov 2018",
      "Dec 2018",
      "Jan 2019"],
      datasets: [{
          label: 'By Month Locals',
          data: [34,
            35,
            37,
            24,
            19,
            25,
            22,
            38,
            26,
            30,
            31,
            27,
            28],
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
        type: 'polarArea',
        data: this.chartData,
        options: {
         
        }
    });
  }

}
