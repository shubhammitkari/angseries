import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/appServices/header.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

  constructor(private _header:HeaderService) { }

  ngOnInit() {
    this._header.goBackLink.next({text:'Back to Products', url:'/products'});
  }

}
