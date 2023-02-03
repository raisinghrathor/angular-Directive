import { Directive, ViewContainerRef } from '@angular/core';
@Directive({
  selector: '[msgd]',
})
export class MessageDirective {
  constructor(public vcRef: ViewContainerRef) {}
}
