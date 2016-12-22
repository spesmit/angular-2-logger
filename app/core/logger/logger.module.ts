import {NgModule, ErrorHandler}      from '@angular/core';

import {Logger}  from './service/impl/logger.service';
import {ServerBaseFormatter} from "./formatter/impl/server-log.service.base";
import {ConsoleBaseFormatter} from "./formatter/impl/console-log.service.base";
import {LoggerResource} from "./resource/logger.resource";
import {HttpModule} from "@angular/http";
import {LoggerHttpService} from "./resource/http/logger-http.service";
import {LoggerRequestOptions} from "./resource/http/logger-http-request.options";
import {LoggerErrorHandler} from "./error/error-handler.service";
import {BaseLoggerOptions} from "./options/logger.options.base";
import {LoggerOptions} from "./options/logger.options";

@NgModule({
  imports: [HttpModule],
  providers: [Logger,
    ConsoleBaseFormatter,
    ServerBaseFormatter,
    LoggerResource,
    LoggerHttpService,
    LoggerRequestOptions,
    {provide: ErrorHandler, useClass: LoggerErrorHandler, deps: [Logger]},
    {provide: LoggerOptions, useClass: BaseLoggerOptions}
  ]
})
export class LoggerModule {

}
