import { Directive } from '@angular/core';
import {ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

   // Use dependency injection to access DOM element
   constructor(private ele:ElementRef) 
   {
     ele.nativeElement.style.background='white'
   }
 
   @HostListener('mouseenter') onmouseenter()
   {
     this.setcolor('green');
   }
 
   @HostListener('mouseleave') onmouseleave()
   {
     this.setcolor('white');
   }
 
   setcolor(color:string)
   {
     this.ele.nativeElement.style.background=color;
   }

}
