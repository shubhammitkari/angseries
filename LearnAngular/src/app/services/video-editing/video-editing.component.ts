import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderService } from 'src/app/appServices/header.service';

@Component({
  selector: 'app-video-editing',
  templateUrl: './video-editing.component.html',
  styleUrls: ['./video-editing.component.scss']
})
export class VideoEditingComponent implements OnInit, OnDestroy {

  constructor(private _header:HeaderService) { }

  ngOnInit() {
    this._header.goBackLink.next({text:'Back to Services', url:'/services'});
  }
  
  ngOnDestroy(){
    this._header.goBackLink.next({text:'', url:''});
  }

}
