import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgRoleButtonModule } from "@benmtz/ng-role-button";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgRoleButtonModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
