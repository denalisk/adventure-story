import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { ScenarioComponent } from './scenario/scenario.component';
import { SuccessComponent } from './success/success.component';
import { FailureComponent } from './failure/failure.component';
import { PlayerCreateComponent } from './player-create/player-create.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ScenarioComponent,
    SuccessComponent,
    FailureComponent,
    PlayerCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
