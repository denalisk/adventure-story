import { Injectable } from '@angular/core';
import { PLAYERS } from './mock-data';
import { Player } from './player.model';

@Injectable()
export class PlayerService {

  constructor() { }

  getPlayer(){
    return PLAYERS[0];
  }

  savePlayer(newPlayer: Player){
    PLAYERS.push(newPlayer);
  }
}
