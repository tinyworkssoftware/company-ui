import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiFooterComponent } from './components/ui-footer/ui-footer.component';
import { UiHeaderComponent } from './components/ui-header/ui-header.component';

@NgModule({
  declarations: [
    AppComponent,
    UiFooterComponent,
    UiHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
