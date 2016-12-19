import {Injectable} from '@angular/core';

import {LoggerConfig}  from './logger-config.service';
import {ServerBaseFormatter}  from './format/server-log-base.service';
import {ConsoleBaseFormatter}  from './format/console-log-base.service';
import {LoggerResource}  from './logger.resource';
import {LoggerInterface} from './logger.interface';

import {Log} from './Log';

@Injectable()
export class Logger implements LoggerInterface {

  private _enabled = true;
  private _enabledServer = true;

  constructor(private consoleBaseFormatter:ConsoleBaseFormatter,
              private serverBaseFormatter:ServerBaseFormatter,
              private loggerConfig:LoggerConfig,
              private loggerResource:LoggerResource) {

    let methods = ['debug', 'error', 'info', 'log', 'warn'];
    methods.forEach((method) => {
      this[method] = this._handleLog(method);
    });

  }

  public debug(...args:any[]) {
  }

  public error(...args:any[]) {
  }

  public info(...args:any[]) {
  }

  public warn(...args:any[]) {
  }

  public log(...args:any[]) {
  }

  private _handleLog(type:string) {
    return function (...args:any[]) {
      if (this._enabled) {
        this._consoleLog(type).apply(null, this._formatLog(args, this.consoleBaseFormatter, type));
      }
      if (this._enabledServer) {
        this._serverLog(type).apply(null, this._formatLog(args, this.serverBaseFormatter, type));
      }
    };
  }

  private _formatLog(...args, formatter, type) {
    let _args : any[] = [];
    args.forEach(function (arg) {
      _args.push(formatter[type](arg));
    });
    return _args;
  }

  private _serverLog(type:string) {
    let resource = this.loggerResource;
    let logFn = resource.serverLog;

    return function (...args:any[]) {
      let log = new Log(JSON.stringify(args), type);
      return logFn.apply(resource, log).subscribe();
    }
  }

  private _consoleLog(type:string) {
    let noop = () => {};
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
      return function (...args : any[]) {
        return logFn.apply(console, args);
      };
    }
    // we are IE which either doesn't have window.console => this is noop and we do nothing,
    // or we are IE where console.log doesn't have apply so we log at least first 2 args
    return function (arg1 : any, arg2 : any) {
      logFn(arg1, arg2 === null ? '' : arg2);
    };

  }

}
