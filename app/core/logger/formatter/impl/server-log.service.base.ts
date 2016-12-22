import {Injectable} from '@angular/core';

import {LoggerFormatterInterface} from "../logger-formatter.interface";

@Injectable()
export class ServerBaseFormatter implements LoggerFormatterInterface {

  info(arg:any):any[] {
    return arg;
  }

  debug(arg:any):any[] {
    return arg;
  }

  warn(arg:any):any[] {
    return arg;
  }

  log(arg:any):any[] {
    return arg;
  }

  error(arg:any):any[] {
    if (arg instanceof Error) {
      if (arg.stack) {
        arg = (arg.message && arg.stack.indexOf(arg.message) === -1)
          ? 'Error: ' + arg.message + '\n' + arg.stack
          : arg.stack;
      }
    }
    return arg;
  }

  pre(args:any[]):any[] {
    return args;
  }

  post(args:any[]):any[] {
    return args;
  }

}
