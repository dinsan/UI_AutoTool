import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent }      from './charts/charts.component';
import { ChartsByCountriesComponent }      from './charts-by-countries/charts-by-countries.component';
import { WeekLocalsComponent }      from './week-locals/week-locals.component';

const routes: Routes = [
  { path: 'chartByBestDay', component: ChartsComponent },
  { path: 'bycountry', component: ChartsByCountriesComponent },
  { path: 'Weeklocals', component: WeekLocalsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
