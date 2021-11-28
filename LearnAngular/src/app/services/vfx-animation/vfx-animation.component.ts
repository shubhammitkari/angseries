import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderService } from 'src/app/appServices/header.service';

@Component({
  selector: 'app-vfx-animation',
  templateUrl: './vfx-animation.component.html',
  styleUrls: ['./vfx-animation.component.scss']
})
export class VfxAnimationComponent implements OnInit, OnDestroy {

  constructor(private _header:HeaderService) { }

  ngOnInit() {
    this._header.goBackLink.next({text:'Back to Services', url:'/services'});
  }
  
  ngOnDestroy(){
    this._header.goBackLink.next({text:'', url:''});
  }

}
