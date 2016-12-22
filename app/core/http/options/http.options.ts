import {Injectable} from '@angular/core';
import {Headers} from "@angular/http";
import {HttpOptionsArgs} from "./http.options.args";

@Injectable()
export class HttpOptions {

  headers : Headers|Object;
  httpLogging : Object;

  constructor({headers, httpLogging} : HttpOptionsArgs = {}) {
    this.headers = headers != null ? headers : null;
    this.httpLogging = httpLogging != null ? httpLogging : null;
  }

  merge(options?: HttpOptionsArgs): HttpOptions {
    return new HttpOptions({
      headers: options && options.headers != null ? options.headers : this.headers,
      httpLogging: options && options.httpLogging != null ? options.httpLogging : this.httpLogging,
    });
  }

}
