import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgRoleButtonDirective } from "./ng-role-button.directive";

@NgModule({
  imports: [CommonModule],
  declarations: [NgRoleButtonDirective],
  exports: [NgRoleButtonDirective]
})
export class NgRoleButtonModule {}
