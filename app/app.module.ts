import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {CoreModule} from "./core/core.module";
import {Headers} from "@angular/http";

// import {ConsoleBaseFormatter} from "./logger/formatter/impl/console-log.service.base";
// import {ServerBaseFormatter} from "./logger/formatter/impl/server-log.service.base";
// import {LoggerConfig} from "./logger/configure/logger.config";
// import {LoggerResource} from "./logger/resource/logger.resource";
// import {Logger} from "./logger/service/impl/logger.service";

@NgModule({
  imports: [BrowserModule, CoreModule.forRoot({}, {serverEnabled: true})],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  // providers: [
  //   {
  //     provide: Logger, useFactory: (consoleBaseFormatter:ConsoleBaseFormatter,
  //                                   serverBaseFormatter:ServerBaseFormatter,
  //                                   loggerConfig:LoggerConfig,
  //                                   loggerResource:LoggerResource) =>
  //     new Logger(consoleBaseFormatter, serverBaseFormatter, loggerConfig, loggerResource),
  //     deps: [ConsoleBaseFormatter, ServerBaseFormatter, LoggerConfig, LoggerResource]
  //   }
  // ]
})
export class AppModule {
}
