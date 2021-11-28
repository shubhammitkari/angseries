import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderService } from 'src/app/appServices/header.service';

@Component({
  selector: 'app-graphic-design',
  templateUrl: './graphic-design.component.html',
  styleUrls: ['./graphic-design.component.scss']
})
export class GraphicDesignComponent implements OnInit, OnDestroy {

  constructor(private _header:HeaderService) { }

  ngOnInit() {
    this._header.goBackLink.next({text:'Back to Services', url:'/services'});
  }
  
  ngOnDestroy(){
    this._header.goBackLink.next({text:'', url:''});
  }

}
