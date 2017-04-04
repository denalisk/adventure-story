import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Location } from '@angular/common';
import { ActivatedRoute, Params} from '@angular/router';

import { Scenario } from '../scenario.model';
import { Player } from '../player.model';
import { ScenarioService } from '../scenario.service';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.css'],
  providers: [ScenarioService, PlayerService]
})
export class ScenarioComponent implements OnInit {
  public scenario: FirebaseObjectObservable<any>;
  public player: FirebaseObjectObservable<any>;

  playerId: string;
  scenarioId: string;

  constructor(public scenarioService: ScenarioService,
              public playerService: PlayerService,
              public location: Location,
              public route: ActivatedRoute
            ) { }

  ngOnInit() {
    this.route.params.forEach((urlParam) => {
      this.playerId = (urlParam['playerId']);
      this.scenarioId = (urlParam['scenarioId']);
      console.log(urlParam);
    });
    this.player = this.playerService.getPlayerById(this.playerId);
    this.scenario = this.scenarioService.getScenarioById(this.scenarioId);
  }

  public logfunction(): void {
    console.log(this.scenario);
  }

}
