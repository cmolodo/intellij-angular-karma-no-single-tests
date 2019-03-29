import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {LineStageHeaderComponent} from "./line-stage-header.component";

describe("LineStageHeaderComponent", () => {
  let component: LineStageHeaderComponent;
  let fixture: ComponentFixture<LineStageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineStageHeaderComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineStageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should have been created", () => {
    expect(component).toBeTruthy();
  });
});
