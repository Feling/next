import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appEncodeInnerHtml]'
})
export class EncodeInnerHtmlDirective {

  private elementRef: ElementRef;

  constructor(el: ElementRef) {
    this.elementRef = el;
  }

  @Input() set appEncodeInnerHtml(encodedHtml: string) {
    this.elementRef.nativeElement.innerHTML = encodedHtml;
  }

}
