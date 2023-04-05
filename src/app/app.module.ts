import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ManagementHomepageComponent } from './components/management-homepage/management-homepage.component';
import { ManagementNavbarComponent } from './components/shared/management-navbar/management-navbar.component';
import { ManagementTitleComponent } from './components/typography/management-title/management-title.component';
import { ManagementTextComponent } from './components/typography/management-text/management-text.component';
import { ManagementButtonComponent } from './components/shared/management-button/management-button.component';
import { ManagementHomepageCardComponent } from './components/management-homepage/management-homepage-card/management-homepage-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagementHomepageComponent,
    ManagementNavbarComponent,
    ManagementTitleComponent,
    ManagementTextComponent,
    ManagementButtonComponent,
    ManagementHomepageCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
