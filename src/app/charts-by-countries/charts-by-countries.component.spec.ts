import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ChartsByCountriesComponent } from "./charts-by-countries.component";

describe("ChartsByCountriesComponent", () => {
  let component: ChartsByCountriesComponent;
  let fixture: ComponentFixture<ChartsByCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChartsByCountriesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsByCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
