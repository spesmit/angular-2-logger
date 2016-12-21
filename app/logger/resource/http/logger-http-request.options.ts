import {Injectable} from '@angular/core';
import {BaseRequestOptions, Headers}  from '@angular/http';
import {LoggerConfig} from "../../config/logger.config";

@Injectable()
export class LoggerRequestOptions extends BaseRequestOptions {

  constructor(private loggerConfig:LoggerConfig) {
    super();

    // defaults
    this.headers.set('Content-Type', 'application/json');

    let headers = loggerConfig.getLoggerHeader();
    if (headers instanceof Headers) {
      this.headers = headers;
    } else if (headers instanceof Object) {
      Object.keys(headers).forEach((entry:string) => {
        this.headers.set(entry, headers[entry]);
      })
    }
  }

}
