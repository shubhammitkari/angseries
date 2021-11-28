import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // laptop
  // https://images.unsplash.com/photo-1523265987393-d988d7d777d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80
  
  // tv
  // https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80

  // Mobile
  // https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80

  // Washing Machine
  // https://images.unsplash.com/photo-1534152294282-c9a7a6895d6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80
  
  products =[
    {proimg:'https://images.unsplash.com/photo-1523265987393-d988d7d777d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80', name:'Laptop', id:'pro01', price:15000},
    {proimg:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80', name:'Mobile', id:'pro02', price:8000},
    {proimg:'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80', name:'TV', id:'pro03', price:12000},
    {proimg:'https://images.unsplash.com/photo-1534152294282-c9a7a6895d6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80', name:'Washing Machine', id:'pro04', price:20000}
  ]


  users =[];

  onCreateUser(uname){
    this.users.push({
      name:uname.value
    });

    if(this.users.length>3){
      // alert("More then 3");
      this.router.navigate(['products']);
    }
  }
  onRemoveUser(){
    this.users.splice(this.users.length -1)
  }

  onRemoveItem(item){
    this.users.splice(item, 1)
  }
}
