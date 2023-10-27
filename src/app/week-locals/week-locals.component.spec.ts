import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WeekLocalsComponent } from "./week-locals.component";

describe("WeekLocalsComponent", () => {
  let component: WeekLocalsComponent;
  let fixture: ComponentFixture<WeekLocalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeekLocalsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekLocalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
