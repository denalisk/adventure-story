import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css'],
  providers: [PlayerService]
})
export class PlayerCreateComponent implements OnInit {
  @Output() playerSender= new EventEmitter();

  constructor(private playerService: PlayerService, public router: Router) { }

  ngOnInit() {
  }

  public wandChoice:string = null;
  public hatChoice:string = null;
  public playerName:string = null;

  imageSourcer(index: number, itemType: string) {
    let returnString: string = '../../assets/images/' + this.idGenerator(index, itemType) +'.png';
    return returnString;
  }
  idGenerator(index: number, itemType: string) {
    let returnString: string = itemType + '_' + index;
    return returnString;
  }
  clickSavePlayer() {
    if (!(this.playerName) || !(this.hatChoice) || !(this.wandChoice)) {
      console.log("You're a fool!  Finish the form");
    } else {
      let newPlayer = new Player(this.playerName, this.hatChoice, this.wandChoice, 'Vanilla');
      this.playerService.savePlayer(newPlayer).then(results => this.router.navigate(['scenario', results.key, '0']));
      // this.router.navigate(['scenario', this.playerService.savePlayer(newPlayer), '0']);
      // var playerKey = this.playerService.savePlayer(newPlayer);
      // console.log("From within clickSavePlayer: " + playerKey);
    }
  }



}
