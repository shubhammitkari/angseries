import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, 
  Renderer2, HostListener } from '@angular/core';
import { Comp2Component } from '../comp2/comp2.component';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  userName="anup";
  @ViewChild('box') box:ElementRef;

  @ViewChild(Comp2Component) child:Comp2Component;
  constructor(private renderer:Renderer2) { 
  }

  

  ngOnInit() {
  }
  ngAfterViewInit(){
    // console.log(this.box);
    this.renderer.setStyle(this.box.nativeElement, 'backgroundColor', 'green')
    this.renderer.setStyle(this.box.nativeElement, 'color', 'white')
    this.renderer.addClass(this.box.nativeElement, 'myClass')
    this.renderer.setAttribute(this.box.nativeElement, 'title','this is test title')
    // this.box.nativeElement.style.backgroundColor="blue";
    // this.box.nativeElement.classList="boxblue";
    // this.box.nativeElement.innerHTML="this is modified html"
    
    // console.log(this.child)
  }

  changeChildProperty(){
    this.child.userName ="Uxtrendz"
  }
  callChildMethod(){
    this.child.clickMe()
  }
}
