import { Injectable } from '@angular/core';
import { PLAYERS } from './mock-data';
import { Player } from './player.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.players = angularFire.database.list('players')
  }

  savePlayer(newPlayer: Player){
    var playerKey = 1;
    return this.players.push(newPlayer);
  }

  getPlayerById(playerId: string): any {
    return this.angularFire.database.object('players/' + playerId);
  }
}
