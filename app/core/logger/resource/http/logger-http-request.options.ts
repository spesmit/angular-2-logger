import {Injectable} from '@angular/core';
import {BaseRequestOptions, Headers}  from '@angular/http';
import {LoggerOptions} from "../../options/logger.options";

@Injectable()
export class LoggerRequestOptions extends BaseRequestOptions {

  constructor(private loggerOptions:LoggerOptions) {
    super();

    // defaults
    this.headers.set('Content-Type', 'application/json');

    let headers = loggerOptions.loggerHeaders;
    if (headers instanceof Headers) {
      this.headers = headers;
    } else if (headers instanceof Object) {
      Object.keys(headers).forEach((entry:string) => {
        this.headers.set(entry, headers[entry]);
      })
    }
  }

}
