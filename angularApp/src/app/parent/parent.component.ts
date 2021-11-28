import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  proSelected:boolean = false;
  selProduct:string;
  addedProduct:any;
  
  

  onSelectProduct(product){
    this.proSelected = true;
    this.selProduct = product;
  }

  onAddedProduct(proData){
    this.addedProduct =proData;
  }
  
}
