import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { ScenarioComponent } from './scenario/scenario.component';
import { SuccessComponent } from './success/success.component';
import { FailureComponent } from './failure/failure.component';
import { PlayerCreateComponent } from './player-create/player-create.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

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
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
