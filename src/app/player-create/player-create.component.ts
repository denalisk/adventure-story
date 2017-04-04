import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Player } from '../player.model';

@Component({
  selector: 'player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {
  @Output() playerSender= new EventEmitter();

  constructor() { }

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
  clickSavePlayer(): void {
    if (!(this.playerName) || !(this.hatChoice) || !(this.wandChoice)) {
      console.log("You're a fool!  Finish the form");
    } else {
      let newPlayer = new Player(this.playerName, this.hatChoice, this.wandChoice, 'Vanilla');
      this.playerSender.emit(newPlayer);
    }
  }

}
