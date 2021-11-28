import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  dynName:string ="Uxtrendz";

  myMethod(){
    return "My Channel name is " + this.dynName
  }
  
  enable:boolean = false;
  
  appStatus:boolean = false;
  status1 ="Online";
  status2 ="Offline";
}
