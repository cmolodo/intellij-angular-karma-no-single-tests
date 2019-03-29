import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LineStageComponent } from "./line-stage.component";

describe("LineStageComponent", () => {
  let component: LineStageComponent;
  let fixture: ComponentFixture<LineStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
