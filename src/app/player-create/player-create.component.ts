import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public wandChoice:string = null;
  public hatChoice:string = null;
  public playerName:string = null;

  imageSourcer(index: number, itemType: string) {
    let returnString: string = '../../assets/images/' + itemType + '_' + index +'.png';
    return returnString;
  }
  idGenerator(index: number, itemType: string) {
    let returnString: string = itemType + index;
    return returnString;
  }

}
