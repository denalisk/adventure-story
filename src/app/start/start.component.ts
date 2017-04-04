import { Component, OnInit } from '@angular/core';
import { Scenario } from '../scenario.model';
import { Router } from '@angular/router';

import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { PLAYERS } from '../mock-data';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  providers: [PlayerService]
})
export class StartComponent implements OnInit {
  currentPlayer: Player;

  constructor(
    public playerService: PlayerService,
    public router: Router,
  ) { }

  ngOnInit() {
  }
  public startGame(playerId: string): void {
    console.log("Created a player and should be routing to new page!");
    this.router.navigate(['scenario', playerId, 1]);
  }
}
