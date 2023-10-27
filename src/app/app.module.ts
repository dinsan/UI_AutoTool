import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChartsComponent } from "./charts/charts.component";
import { ChartsByCountriesComponent } from "./charts-by-countries/charts-by-countries.component";
import { WeekLocalsComponent } from "./week-locals/week-locals.component";
import { MonthLocalsComponent } from "./month-locals/month-locals.component";
import { HomeComponent } from "./home/home.component";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    ChartsByCountriesComponent,
    WeekLocalsComponent,
    MonthLocalsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InputsModule,
    BrowserAnimationsModule,
    DropDownsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
