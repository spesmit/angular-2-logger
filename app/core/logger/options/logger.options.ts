import {Injectable} from '@angular/core';

import {LogType} from '../enums/logger-type.enum';
import {Headers} from "@angular/http";
import {LoggerOptionsArgs} from "./logger.options.args";

@Injectable()
export class LoggerOptions {

  url:string;
  methods:LogType[];
  consoleEnabled:boolean;
  serverEnabled:boolean;
  loggerHeaders:Headers|Object;


  constructor({url, methods, consoleEnabled, serverEnabled, loggerHeaders} : LoggerOptionsArgs = {}) {
    this.url = url != null ? url : null;
    this.methods = methods != null ? methods : null;
    this.consoleEnabled = consoleEnabled != null ? consoleEnabled : null;
    this.serverEnabled = serverEnabled != null ? serverEnabled : null;
    this.loggerHeaders = loggerHeaders != null ? loggerHeaders : null;
  }

  merge(options?:LoggerOptionsArgs):LoggerOptions {
    return new LoggerOptions({
      url: options && options.url != null ? options.url : this.url,
      methods: options && options.methods != null ? options.methods : this.methods,
      consoleEnabled: options && options.consoleEnabled != null ? options.consoleEnabled : this.consoleEnabled,
      serverEnabled: options && options.serverEnabled != null ? options.serverEnabled : this.serverEnabled,
      loggerHeaders: options && options.loggerHeaders != null ? options.loggerHeaders : this.loggerHeaders,
    });
  }

}
