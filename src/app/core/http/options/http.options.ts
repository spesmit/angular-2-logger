import {Injectable} from '@angular/core';
import {Headers} from "@angular/http";
import {HttpOptionsArgs} from "./http.options.args";

@Injectable()
export class HttpOptions {

  httpLogging : Object;

  constructor({httpLogging} : HttpOptionsArgs = {}) {
    this.httpLogging = httpLogging != null ? httpLogging : null;
  }

  merge(options?: HttpOptionsArgs): HttpOptions {
    return new HttpOptions({
      httpLogging: options && options.httpLogging != null ? options.httpLogging : this.httpLogging
    });
  }

}
