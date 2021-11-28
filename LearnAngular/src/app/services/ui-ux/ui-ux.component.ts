import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderService } from 'src/app/appServices/header.service';

@Component({
  selector: 'app-ui-ux',
  templateUrl: './ui-ux.component.html',
  styleUrls: ['./ui-ux.component.scss']
})
export class UiUxComponent implements OnInit, OnDestroy {

  constructor(private _header:HeaderService) { }

  ngOnInit() {
    this._header.goBackLink.next({text:'Back to Services', url:'/services'});
  }
  
  ngOnDestroy(){
    this._header.goBackLink.next({text:'', url:''});
  }
  
  
}
