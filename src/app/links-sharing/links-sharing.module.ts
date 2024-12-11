import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { LinksSharingComponent } from './links-sharing.component';
import { LinksComponent } from './pages/links/links.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LinkSharingRoutingModule } from './links-sharing-routing.module';
import { PhoneComponent } from './components/phone/phone.component';

@NgModule({
  declarations: [
    NavbarComponent,
    LinksSharingComponent,
    LinksComponent,
    ProfileComponent,
    PhoneComponent,
  ],
  imports: [CommonModule, LinkSharingRoutingModule, ReactiveFormsModule],
  exports: [LinksSharingComponent],
})
export class LinksSharingModule {}
