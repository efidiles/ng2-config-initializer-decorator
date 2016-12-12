import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LayoutManagerService } from './layout-manager.service';
import { configInitializer } from './config-initializer.provider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    LayoutManagerService,
    configInitializer,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
