import { Directive } from '@angular/core';

@Directive({
  selector: '[appLog]',
  standalone: true
})
export class LogDirective {

  constructor() { }

}
