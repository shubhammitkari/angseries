import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  selectedProduct:string;

  getProductVal(val){
    console.log(val.target.value)
    this.selectedProduct=val.target.value;
  }

}
