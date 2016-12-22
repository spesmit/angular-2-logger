import {Injectable} from '@angular/core';
import {XHRBackend, Http} from "@angular/http";
import {LoggerRequestOptions} from "./logger-http-request.options";

@Injectable()
export class LoggerHttpService extends Http {

  constructor(xhrBackend:XHRBackend, requestOptions:LoggerRequestOptions) {
    super(xhrBackend, requestOptions);
  }

}
