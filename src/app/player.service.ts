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

  getPlayer(){
    return PLAYERS[0];
  }

  savePlayer(newPlayer: Player){
    var playerKey = 1;
    // this.players.push(newPlayer).then((results) => {this.returnPlayerKey(results.key);});
    return this.players.push(newPlayer);
  }

  returnPlayerKey(newKey: string) {
    console.log(newKey);
    return newKey;
  }

  getPlayerById(playerId: string): any {
    return this.angularFire.database.object('players/' + playerId);
  }
}
