import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MonthLocalsComponent } from "./month-locals.component";

describe("MonthLocalsComponent", () => {
  let component: MonthLocalsComponent;
  let fixture: ComponentFixture<MonthLocalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MonthLocalsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthLocalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
