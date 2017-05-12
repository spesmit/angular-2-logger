import {Injectable} from '@angular/core';
import {XHRBackend, RequestOptions, Http, Request, RequestOptionsArgs, Response} from "@angular/http";
import {Logger} from "../../logger/service/impl/logger.service";
import {Observable} from "rxjs/Rx";
import {HttpOptions} from "../options/http.options";

@Injectable()
export class HttpCoreService extends Http {

  private _logging: any;

  constructor(xhrBackend:XHRBackend, requestOptions:RequestOptions, private httpOptions:HttpOptions, private logger:Logger) {
    super(xhrBackend, requestOptions);
    this._logging = httpOptions.httpLogging;
  }

  request(url:string | Request, options?:RequestOptionsArgs):Observable<Response> {
    return super.request(url, options)
      .do((res:any) => {
        if (this.logger[this._logging.success]) {
          this.logger[this._logging.success](res);
        }
      })
      .catch((error:any) => {
        if (this.logger[this._logging.error]) {
          this.logger[this._logging.error](error);
        }
        return Observable.throw(error);
      })
  }

}
