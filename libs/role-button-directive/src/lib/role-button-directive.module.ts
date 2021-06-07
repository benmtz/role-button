import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleButtonDirective } from './role-button.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    RoleButtonDirective
  ],
  exports: [
    RoleButtonDirective
  ]
})
export class RoleButtonDirectiveModule {}
