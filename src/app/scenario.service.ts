import { Injectable } from '@angular/core';
import { Scenario } from './scenario.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class ScenarioService {
  scenario: FirebaseObjectObservable<any>;
  constructor(private angularFire: AngularFire) {
    this.scenario = angularFire.database.object('scenarios');
  }

  public getScenarioById(scenarioId: string): any {
    console.log(this.angularFire.database.object('scenarios/' + scenarioId));
    return this.angularFire.database.object('scenarios/' + scenarioId);
  }

  public getOptions(scenarioId: string): any {
    return "hello";
  }
}
