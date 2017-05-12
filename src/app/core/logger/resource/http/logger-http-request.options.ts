import {Injectable} from '@angular/core';
import {BaseRequestOptions}  from '@angular/http';
import {LoggerOptions} from "../../options/logger.options";

@Injectable()
export class LoggerRequestOptions extends BaseRequestOptions {

  constructor(private loggerOptions:LoggerOptions) {
    super();
    super.merge(loggerOptions.loggerRequestOptions);
  }

}
