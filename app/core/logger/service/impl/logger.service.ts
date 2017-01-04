import {Injectable} from '@angular/core';

import {LoggerResource}  from '../../resource/logger.resource';
import {LoggerInterface} from '../logger.interface';
import {LogType} from '../../enums/logger-type.enum';
import {Log} from '../../domain/Log';
import {ConsoleBaseFormatter, LoggerFormatterInterface, ServerBaseFormatter} from "../../formatter";
import {LoggerOptions} from "../../options";

@Injectable()
export class Logger implements LoggerInterface {

  private _enabled:boolean;
  private _enabledServer:boolean;

  constructor(private consoleBaseFormatter:ConsoleBaseFormatter,
              private serverBaseFormatter:ServerBaseFormatter,
              private loggerOptions:LoggerOptions,
              private loggerResource:LoggerResource) {

    let methods = loggerOptions.methods;
    this._enabled = loggerOptions.consoleEnabled;
    this._enabledServer = loggerOptions.serverEnabled;

    methods.forEach((method) => {
      this[LogType[method]] = this._handleLog(LogType[method]);
    });
  }

  public debug(...args:any[]):void {
  }

  public error(...args:any[]):void {
  }

  public info(...args:any[]):void {
  }

  public warn(...args:any[]):void {
  }

  public log(...args:any[]):void {
  }

  public getInstance(instance:string):LoggerInterface {
    return new LoggerInstance(this.consoleBaseFormatter, this.serverBaseFormatter, this.loggerOptions, this.loggerResource, instance);
  }

  private _handleLog(type:string) {
    return function (...args:any[]) {
      if (this._enabled) {
        this._consoleLog(type).apply(self, this._formatLog(this.consoleBaseFormatter, type, args));
      }
      if (this._enabledServer) {
        this._serverLog(type).apply(self, this._formatLog(this.serverBaseFormatter, type, args));
      }
    };
  }

  private _formatLog(formatter:LoggerFormatterInterface, type:string, args:any[]) {
    let _args:any[] = [];
    args = formatter.pre(args);
    args.forEach((arg) => {
      _args.push(formatter[type](arg));
    });
    return formatter.post(_args);
  }

  private _serverLog(type:string) {
    let resource = this.loggerResource;
    let logFn = resource.serverLog;

    return function (...args:any[]) {
      let log = new Log(JSON.stringify(args), LogType[type]);
      logFn.apply(resource, log).subscribe(
        (res:any) => res,
        (error:any) => {
          console.error(error);
        })
    }
  }

  private _consoleLog(type:string) {
    let noop = () => {
    };
    let console = window.console || {},
      logFn = console[type] || noop,
      hasApply = false;

    // Note: reading logFn.apply throws an error in IE11 in IE8 document mode.
    // The reason behind this is that console.log has type "object" in IE8...
    try {
      hasApply = !!logFn.apply;
    } catch (e) {
      //
    }

    if (hasApply) {
      return function (...args:any[]) {
        logFn.apply(console, args);
      };
    }
    // we are IE which either doesn't have window.console => this is noop and we do nothing,
    // or we are IE where console.log doesn't have apply so we log at least first 2 args
    return function (arg1:any, arg2:any) {
      logFn(arg1, arg2 === null ? '' : arg2);
    };

  }

}

class LoggerInstance extends Logger {

  constructor(consoleBaseFormatter:ConsoleBaseFormatter,
              serverBaseFormatter:ServerBaseFormatter,
              loggerOptions:LoggerOptions,
              loggerResource:LoggerResource,
              private instance:string) {

    super(consoleBaseFormatter, serverBaseFormatter, loggerOptions, loggerResource);

    let methods = loggerOptions.methods;

    methods.forEach((method) => {
      this[LogType[method]] = this._addInstance(this[LogType[method]]);
    });

  }

  private _addInstance(fn:Function) {
    return function (...args:any[]) {
      args.unshift(this.instance);
      fn.apply(this, args);
    }
  }

}
