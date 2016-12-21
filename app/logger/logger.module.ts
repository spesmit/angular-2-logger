import {NgModule, ErrorHandler}      from '@angular/core';

import {Logger}  from './service/impl/logger.service';
import {LoggerConfig}  from './config/logger.config';
import {ServerBaseFormatter} from "./formatter/impl/server-log.service.base";
import {ConsoleBaseFormatter} from "./formatter/impl/console-log.service.base";
import {LoggerResource} from "./resource/logger.resource";
import {HttpModule} from "@angular/http";
import {LoggerHttpService} from "./resource/http/logger-http.service";
import {LoggerRequestOptions} from "./resource/http/logger-http-request.options";
import {LoggerErrorHandler} from "./error/error-handler.service";

@NgModule({
  imports: [HttpModule],
  providers: [Logger,
    LoggerConfig,
    ConsoleBaseFormatter,
    ServerBaseFormatter,
    LoggerResource,
    LoggerHttpService,
    LoggerRequestOptions, {
      provide: ErrorHandler, useClass: LoggerErrorHandler, deps: [Logger]
    }
  ]
})
export class LoggerModule {

}
