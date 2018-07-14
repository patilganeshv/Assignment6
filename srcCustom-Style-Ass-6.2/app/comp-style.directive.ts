import { Directive } from '@angular/core';
import {ElementRef, HostListener} from '@angular/core';


@Directive({
  selector: '[appCompStyle]'
})
export class CompStyleDirective {

  // Use dependency injection to access DOM element
  constructor(private ele:ElementRef) 
  {
    ele.nativeElement.style.background='yellow';
    ele.nativeElement.style.fontWeight='bold';
  }


}
