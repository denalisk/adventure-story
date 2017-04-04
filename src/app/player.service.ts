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
    this.players.push(newPlayer);
  }
}
