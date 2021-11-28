import { Component, OnInit, ElementRef, ContentChild, AfterContentInit, Renderer2, ViewChild } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';
import { TestdirectiveDirective } from '../appDirectives/testdirective.directive';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit, AfterContentInit {
  userName="Default Value";

  @ContentChild('childCon') childparagaph:ElementRef;

  @ViewChild(TestdirectiveDirective) myDir:TestdirectiveDirective

  constructor(private renderer:Renderer2) {
   }

  ngOnInit() {
   
  }
  ngAfterContentInit(){
    console.log(this.childparagaph)
    this.renderer.setStyle(this.childparagaph.nativeElement, 'color', 'red')
  }

  clickMe(){
  alert(this.userName);
  var text = this.renderer.createText('this text is created by renderer')
  this.renderer.appendChild(this.childparagaph.nativeElement, text)  
}

changeColor(color){
  this.myDir.changeBg(color)
}

}
