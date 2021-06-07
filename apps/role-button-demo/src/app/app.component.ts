import { Component } from '@angular/core';

@Component({
  selector: 'role-button-root',
  template: `
    <div role="button" (click)="someFlag = !someFlag">I'm a div with a role="button"</div>
    <div *ngIf="someFlag">I'm shown</div>
  `
})
export class AppComponent {
  someFlag = false;
}
