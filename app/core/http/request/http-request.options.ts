import {Injectable} from '@angular/core';
import {BaseRequestOptions, Headers}  from '@angular/http';
import {HttpOptions} from "../options/http.options";

@Injectable()
export class HttpRequestOptions extends BaseRequestOptions {

  constructor(private httpOptions:HttpOptions) {
    super();

    // defaults
    this.headers.set('Content-Type', 'application/json');

    let headers = httpOptions.headers;
    if (headers instanceof Headers) {
      this.headers = headers;
    } else if (headers instanceof Object) {
      Object.keys(headers).forEach((entry:string) => {
        this.headers.set(entry, headers[entry]);
      })
    }
  }

}
