import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChartsComponent } from "./charts/charts.component";
import { ChartsByCountriesComponent } from "./charts-by-countries/charts-by-countries.component";
import { WeekLocalsComponent } from "./week-locals/week-locals.component";
import { MonthLocalsComponent } from "./month-locals/month-locals.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "chartByBestDay", component: ChartsComponent },
  { path: "bycountry", component: ChartsByCountriesComponent },
  { path: "Weeklocals", component: WeekLocalsComponent },
  { path: "month_localsComponent", component: MonthLocalsComponent },
  { path: "home", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
