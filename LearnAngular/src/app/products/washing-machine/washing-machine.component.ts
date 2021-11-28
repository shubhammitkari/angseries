import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/appServices/header.service';

@Component({
  selector: 'app-washing-machine',
  templateUrl: './washing-machine.component.html',
  styleUrls: ['./washing-machine.component.scss']
})
export class WashingMachineComponent implements OnInit {

  constructor(private _header:HeaderService) { }

  ngOnInit() {
    this._header.goBackLink.next({text:'Back to Products', url:'/products'});
  }

}
