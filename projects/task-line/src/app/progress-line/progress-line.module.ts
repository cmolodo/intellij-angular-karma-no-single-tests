import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LineStageComponent } from "./line-stage/line-stage.component";
import { ProgressLineComponent } from "./progress-line/progress-line.component";
import { LineStageHeaderComponent } from "./line-stage-header/line-stage-header.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LineStageComponent,
    ProgressLineComponent,
    LineStageHeaderComponent
  ],
  exports: [
    LineStageComponent,
    ProgressLineComponent
  ]
})
export class ProgressLineModule { }
