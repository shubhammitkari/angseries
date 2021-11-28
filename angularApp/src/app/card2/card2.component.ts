import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {

  constructor(private _msgService:DesignutilityService) { }
  product={};
  ngOnInit() {
    this.product =this._msgService.product;
  }

  btnClick(){
    this._msgService.messageAlert();
  }


}
