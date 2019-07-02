import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Chart from 'chart.js'

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  
  @ViewChild("chart")
  public refChart: ElementRef;

  public chartData: any;

  public constructor() { 
    this.chartData = {};
  }

  public ngOnInit() { 
    this.chartData = {
      labels: ["es",
      "en",
      "nl",
      "it",
      "de",
      "fr",
      "ru",
      "pt",
      "pl",
      "ca",
      "zh",
      "da",
      "ko",
      "zh-cn",
      "ro",
      "ja",
      "lt",
      "nb",
      "sk",
      "sl",
      "zh-hk"],
      datasets: [{
          label: 'By country',
          data: [365,
            278,
            194,
            141,
            60,
            58,
            25,
            21,
            12,
            8,
            7,
            3,
            3,
            3,
            2,
            1,
            1,
            1,
            1,
            1,
            1],
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
        type: 'pie',
        data: this.chartData,
        options: {
          tooltips: {
            enabled: false
       },
                plugins: {
               datalabels: {
                   formatter: (value, ctx) => {
                   
                     let sum = 0;
                     let dataArr = ctx.chart.data.datasets[0].data;
                     dataArr.map(data => {
                         sum += data;
                     });
                     let percentage = (value*100 / sum).toFixed(2)+"%";
                     return percentage;
   
                 
                   },
                   color: '#fff',
                        }
           }
        }
    });
  }

}
