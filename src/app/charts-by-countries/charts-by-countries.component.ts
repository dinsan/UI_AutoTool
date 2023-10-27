import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import * as Chart from "chart.js";

@Component({
  selector: "app-charts-by-countries",
  templateUrl: "./charts-by-countries.component.html",
  styleUrls: ["./charts-by-countries.component.css"],
})
export class ChartsByCountriesComponent implements OnInit {
  @ViewChild("chart")
  public refChart: ElementRef;

  public chartData: any;

  public constructor() {
    this.chartData = {};
  }

  public ngOnInit() {
    this.chartData = {
      labels: [
        "Monday",
        "Thursday",
        "Wednesday",
        "Tuesday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      datasets: [
        {
          label: "Number of visitirs By Day",
          data: [19, 172, 187, 185, 165, 247, 267],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
  }

  public ngAfterViewInit() {
    let chart = this.refChart.nativeElement;
    let ctx = chart.getContext("2d");
    let myChart = new Chart(ctx, {
      type: "bar",
      data: this.chartData,
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }
}
