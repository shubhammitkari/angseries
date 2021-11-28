import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTestdirective]'
})
export class TestdirectiveDirective {

  constructor(private el:ElementRef, private renderer:Renderer2) { 
    // this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow')
  }

   changeBg(color:string){
     this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color)
  }
  
  @HostBinding('style.backgroundColor') bgColor ="green";
  @HostBinding('class.myClass') className;
  @HostBinding('attr.alt') myTitle;
  @HostListener('click') myClick(){
    this.bgColor ='blue';
    this.className = true;
    this.myTitle ='this is test title'
  }
  @HostListener('mouseover') myMouseOver(){
    // this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'lightgray')
  }
  @HostListener('mouseout') myMouseOut(){
    // this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'white')
  }

}
