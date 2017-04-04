import { Component, OnInit } from '@angular/core';
import { Scenario } from '../scenario.model';
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

  constructor(public playerService: PlayerService) { }

  ngOnInit() {
  }
  public savePlayer(newPlayer: Player): void {
    this.playerService.savePlayer(newPlayer);
    this.currentPlayer = PLAYERS[0];
  }

}
