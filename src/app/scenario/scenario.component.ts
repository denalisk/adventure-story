import { Component, OnInit } from '@angular/core';
import { Scenario } from '../scenario.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ScenarioService } from '../scenario.service';

@Component({
  selector: 'app-scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.css'],
  providers: [ScenarioService]
})
export class ScenarioComponent implements OnInit {
  public scenarios: FirebaseListObservable<any[]>;

  constructor(public scenarioService: ScenarioService) { }

  ngOnInit() {
    console.log(this.scenarios);
    this.scenarios = this.scenarioService.getScenarios();
  }

  public logfunction(): void {
    console.log(this.scenarios);
  }

}
