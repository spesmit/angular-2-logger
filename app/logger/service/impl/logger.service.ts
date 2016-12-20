import {Injectable} from '@angular/core';

import {LoggerConfig}  from '../../configure/logger.config';
import {LoggerResource}  from '../../resource/logger.resource';
import {LoggerInterface} from '../logger.interface';
import {LogType} from '../../domain/logger-type.enum';
import {Log} from '../../domain/Log';
import {ConsoleBaseFormatter} from "../../formatter/impl/console-log.service.base";
import {ServerBaseFormatter} from "../../formatter/impl/server-log.service.base";
import {LoggerFormatterInterface} from "../../formatter/logger-formatter.interface";

@Injectable()
export class Logger implements LoggerInterface {

  private _enabled:boolean;
  private _enabledServer:boolean;

  constructor(private consoleBaseFormatter:ConsoleBaseFormatter,
              private serverBaseFormatter:ServerBaseFormatter,
              private loggerConfig:LoggerConfig,
              private loggerResource:LoggerResource
  ) {

    let methods = this.loggerConfig.getMethods();
    this._enabled = loggerConfig.getConsoleEnabled();
    this._enabledServer = loggerConfig.getServerEnabled();

    methods.forEach((method) => {
      this[LogType[method]] = this._handleLog(LogType[method]);
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
      return logFn.apply(resource, log).subscribe();
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
        return logFn.apply(console, args);
      };
    }
    // we are IE which either doesn't have window.console => this is noop and we do nothing,
    // or we are IE where console.log doesn't have apply so we log at least first 2 args
    return function (arg1:any, arg2:any) {
      logFn(arg1, arg2 === null ? '' : arg2);
    };

  }

}
