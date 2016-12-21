import {Injectable} from '@angular/core';
import {BaseRequestOptions, Headers}  from '@angular/http';
import {HttpConfig} from "../config/http.config";

@Injectable()
export class HttpRequestOptions extends BaseRequestOptions {

  constructor(private httpConfig:HttpConfig) {
    super();

    // defaults
    this.headers.set('Content-Type', 'application/json');

    let headers = httpConfig.getHeaders();
    if (headers instanceof Headers) {
      this.headers = headers;
    } else if (headers instanceof Object) {
      Object.keys(headers).forEach((entry:string) => {
        this.headers.set(entry, headers[entry]);
      })
    }
  }

}
