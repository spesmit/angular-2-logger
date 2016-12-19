import {NgModule}      from '@angular/core';
import {HttpModule}      from '@angular/http';

import {Logger}  from './logger.service';
import {LoggerResource}  from './logger.resource';
import {ConsoleBaseFormatter}  from './format/console-log-base.service';
import {ServerBaseFormatter}  from './format/server-log-base.service';
import {LoggerConfig}  from './logger-config.service';

@NgModule({
  imports: [HttpModule],
  providers : [Logger, LoggerConfig, LoggerResource, ConsoleBaseFormatter, ServerBaseFormatter]
})

export class LoggerModule {
}
