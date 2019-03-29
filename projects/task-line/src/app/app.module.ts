import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {ProgressLineModule} from "./progress-line/progress-line.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProgressLineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
