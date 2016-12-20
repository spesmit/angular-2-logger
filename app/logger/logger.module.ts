import {NgModule, ModuleWithProviders, forwardRef}      from '@angular/core';

import {Logger}  from './service/impl/logger.service';
import {LoggerConfig}  from './configure/logger.config';
import {ServerBaseFormatter} from "./formatter/impl/server-log.service.base";
import {ConsoleBaseFormatter} from "./formatter/impl/console-log.service.base";
import {LoggerResource} from "./resource/logger.resource";
import {Http} from "@angular/http";

@NgModule({
  providers: [Logger, LoggerConfig, ConsoleBaseFormatter, ServerBaseFormatter, LoggerResource]
})
export class LoggerModule {

}
