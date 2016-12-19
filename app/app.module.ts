import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {LoggerModule} from './logger/logger.module';

@NgModule({
  imports: [BrowserModule, LoggerModule.forRoot({serverEnabled : true})],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
