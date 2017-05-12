import {Injectable} from '@angular/core';

import {LogType} from '../enums/logger-type.enum';
import {Headers, BaseRequestOptions} from "@angular/http";
import {LoggerOptionsArgs} from "./logger.options.args";

@Injectable()
export class LoggerOptions {

  url:string;
  methods:LogType[];
  consoleEnabled:boolean;
  serverEnabled:boolean;
  loggerRequestOptions:BaseRequestOptions;


  constructor({url, methods, consoleEnabled, serverEnabled, loggerRequestOptions} : LoggerOptionsArgs = {}) {
    this.url = url != null ? url : null;
    this.methods = methods != null ? methods : null;
    this.consoleEnabled = consoleEnabled != null ? consoleEnabled : null;
    this.serverEnabled = serverEnabled != null ? serverEnabled : null;
    this.loggerRequestOptions = loggerRequestOptions != null ? loggerRequestOptions : null;
  }

  merge(options?:LoggerOptionsArgs):LoggerOptions {
    return new LoggerOptions({
      url: options && options.url != null ? options.url : this.url,
      methods: options && options.methods != null ? options.methods : this.methods,
      consoleEnabled: options && options.consoleEnabled != null ? options.consoleEnabled : this.consoleEnabled,
      serverEnabled: options && options.serverEnabled != null ? options.serverEnabled : this.serverEnabled,
      loggerRequestOptions: options && options.loggerRequestOptions != null ? options.loggerRequestOptions : this.loggerRequestOptions,
    });
  }

}
