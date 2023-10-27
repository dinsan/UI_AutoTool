import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import * as Chart from "chart.js";
import { ChartsService } from "../share/charts.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-charts",
  templateUrl: "./charts.component.html",
  styleUrls: ["./charts.component.css"],
})
export class ChartsComponent implements OnInit {
  @ViewChild("chart")
  public refChart: ElementRef;

  public chartData: any;
  public data;

  public constructor(
    private chartsService: ChartsService,
    private http: HttpClient,
  ) {
    this.chartData = {};
  }

  public ngOnInit() {}

  public ngAfterViewInit() {
    this.http.get("http://localhost:8000/bycountry").subscribe((res: any[]) => {
      let chart = this.refChart.nativeElement;
      let ctx = chart.getContext("2d");
      let myChart = new Chart(ctx, {
        type: "polarArea",
        data: res["ByCountry"],
        options: {
          tooltips: {
            enabled: false,
          },
          plugins: {
            datalabels: {
              formatter: (value, ctx) => {
                let sum = 0;
                let dataArr = ctx.chart.data.datasets[0].data;
                dataArr.map((data) => {
                  sum += data;
                });
                let percentage = ((value * 100) / sum).toFixed(2) + "%";
                return percentage;
              },
              color: "#fff",
            },
          },
        },
      });
    });
  }
}
