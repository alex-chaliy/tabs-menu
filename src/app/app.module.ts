import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { GeneralPageModule } from './general-page/general-page.module';
import { IntegrationsPageComponent } from './integrations-page/integrations-page/integrations-page.component';
import { IntegrationsPageModule } from './integrations-page/integrations-page.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GeneralPageModule,
    IntegrationsPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
