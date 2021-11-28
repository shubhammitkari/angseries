import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.css']
})
export class ClassStyleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  mypro:boolean = false;

  myStyle1 = "15px";

  isActive:boolean = false;

  mltclasses ={
    class1:true,
    class2:false,
    class3: true
  }

  mltStyle ={
    'background': 'red',
    'border': '10px solid green'
  }
}
