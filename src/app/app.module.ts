import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinksSharingModule } from './links-sharing/links-sharing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LinksSharingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
