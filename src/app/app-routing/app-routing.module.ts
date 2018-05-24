import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GeneralPageComponent } from '../general-page/general-page/general-page.component';
import { IntegrationsPageComponent } from '../integrations-page/integrations-page/integrations-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/general', pathMatch: 'full' },
    { path: 'general', component: GeneralPageComponent },
    { path: 'integrations', component: IntegrationsPageComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
