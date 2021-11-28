import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/appServices/header.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.scss']
})
export class LaptopComponent implements OnInit {

  constructor(private _header:HeaderService) { }

  ngOnInit() {
    this._header.goBackLink.next({text:'Back to Products', url:'/products'});
  }

}
