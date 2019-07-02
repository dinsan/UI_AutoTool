import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { ChartsByCountriesComponent } from './charts-by-countries/charts-by-countries.component';
import { WeekLocalsComponent } from './week-locals/week-locals.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    ChartsByCountriesComponent,
    WeekLocalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
