import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)'
  }
})
export class SafeLinkDirective {

  queryParam = input('myapp', {alias: 'appSafeLink'});
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() { 
    console.log('App Safe Link Directive is activated!')
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsLeavePage = window.confirm('Do you wan to leave the page?');

    if (wantsLeavePage) {
      const address = this.hostElementRef.nativeElement.href;
      this.hostElementRef.nativeElement.href = address + '?from=' + this.queryParam();
      return;
    }
    event.preventDefault();
  }

}
