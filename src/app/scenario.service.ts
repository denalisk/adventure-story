import { Injectable } from '@angular/core';
import { Scenario } from './scenario.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ScenarioService {
  scenarios: FirebaseListObservable<any[]>;
  constructor(private angularFire: AngularFire) {
    this.scenarios = angularFire.database.list('scenarios');
  }

  getScenarios() {
    return this.scenarios;
  }
}
