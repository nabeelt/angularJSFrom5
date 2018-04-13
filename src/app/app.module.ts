import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static'; // for running hybrid application inside angular v5

import { AppRoutingModule } from './app.routing.module';
import {UrlHandlingStrategy} from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { View3Component } from './view3/view3.component';

export class Ng1Ng5UrlHandlingStrategy implements UrlHandlingStrategy {
    shouldProcessUrl(url) { return url.toString().startsWith('/view3'); }
    extract(url) { return url; }
    merge(url, whole) { return url; }
  }


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    View3Component
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    AppRoutingModule
  ],
  providers: [{ provide: UrlHandlingStrategy, useClass: Ng1Ng5UrlHandlingStrategy }],
  bootstrap: [AppComponent] // removed for upgrade module
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}
  // ngDoBootstrap() {
  //   this.upgrade.bootstrap(document.body, ['myApp'], { strictDi: true });
  // }
}