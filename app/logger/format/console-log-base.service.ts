import {Injectable} from '@angular/core';

import {LoggerInterface} from '../logger.interface';

@Injectable()
export class ConsoleBaseFormatter implements LoggerInterface {

  info(arg: any) {
    return arg;
  }

  debug(arg: any) {
    return arg;
  }

  warn(arg: any) {
    return arg;
  }

  log(arg: any) {
    return arg;
  }

  error(arg: any) {
    if (arg instanceof Error) {
      if (arg.stack) {
        arg = (arg.message && arg.stack.indexOf(arg.message) === -1)
          ? 'Error: ' + arg.message + '\n' + arg.stack
          : arg.stack;
      }
    }
    return arg;
  }

}
