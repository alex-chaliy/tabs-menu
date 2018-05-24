import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

// pages
import { GeneralPageModule } from './general-page/general-page.module';
import { IntegrationsPageModule } from './integrations-page/integrations-page.module';

// services
import { MenuService } from './services/menu/menu.service';

// ui elements
import { MenuModule } from './ui-elements/menu/menu.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // pages
    GeneralPageModule,
    IntegrationsPageModule,

    // ui elements
    MenuModule
  ],
  providers: [
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
