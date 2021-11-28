import { Component } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { HeaderService } from './appServices/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learnAngular';
  pageName:string; // Get Page Name

  constructor(private router:Router, private _header:HeaderService){
    this.router.events.subscribe((event:RouterEvent)=>{
      if(event instanceof NavigationEnd){
        var lastIndex = window.location.pathname.lastIndexOf('/') + 1;
        this.pageName = window.location.pathname.substring(lastIndex);
        // console.log(lastIndex);
        // console.log(this.pageName);

        this._header.pageName.next(this.pageName);

        if(window.location.pathname.match('/de/') || window.location.pathname=='/de'){
          this._header.selectedLang.next('de')
        }else{
          this._header.selectedLang.next('en')
        }
      }
    })
  }
}
