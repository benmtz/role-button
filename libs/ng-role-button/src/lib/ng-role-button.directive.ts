import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[role="button"]'
})
export class NgRoleButtonDirective {

  @HostBinding("tabindex")
  tabindex = "0";

  @HostListener("keydown.space")
  handleSpaceKey() {
    this.el.nativeElement.click();
  }

  constructor(private el: ElementRef) { }

}
