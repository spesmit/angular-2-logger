import {Injectable} from '@angular/core';
import {XHRBackend, Http} from "@angular/http";
import {LoggerRequestOptions} from "./logger-http-request.options";
import {Observable} from "rxjs/Rx";

@Injectable()
export class LoggerHttpService extends Http {

  constructor(xhrBackend:XHRBackend, requestOptions:LoggerRequestOptions) {
    super(xhrBackend, requestOptions);
  }

  // request(url:string | Request, options?:RequestOptionsArgs):Observable<Response> {
  //   return super.request(url, options)
  //     .catch(error => {
  //       console.error(error);
  //       return Observable.throw(error);
  //     });
  // }


}
