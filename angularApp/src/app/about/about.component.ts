import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  value = 'This is test value'
  date = new Date();
  nameSearch:string ='';
  productArr:any[] =[
    {
      sno:1,
      name:'Mobile',
      price:'7000 Rs',
      availablity:'Available'
    },
    {
      sno:2,
      name:'Television',
      price:'16000 Rs',
      availablity:'Not Available'
    },
    {
      sno:3,
      name:'Laptop',
      price:'4000 Rs',
      availablity:'Available'
    },
    {
      sno:4,
      name:'Washing Machine',
      price:'17000 Rs',
      availablity:'Not Available'
    }
  ]

  onAddProduct(add){
    this.productArr.push({
      sno:5,
      name:add.value,
      price:'4000 Rs',
      availablity:'Not Available'
    })
  }
}
