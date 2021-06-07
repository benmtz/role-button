import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoleButtonDirectiveModule } from "@role-button/role-button-directive";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RoleButtonDirectiveModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
