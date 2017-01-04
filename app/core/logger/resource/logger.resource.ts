import {Injectable} from '@angular/core';

import {Log} from '../domain/Log';
import {Observable}     from 'rxjs/Observable';
import './http/rx-js.operaters';
import {LoggerHttpService} from "./http/logger-http.service";
import {LoggerOptions} from "../options";

@Injectable()
export class LoggerResource {
  private _baseUrl:string;

  constructor(private http:LoggerHttpService, private loggerOptions:LoggerOptions) {
    this._baseUrl = loggerOptions.url;
  }

  public serverLog(log:Log):Observable<Log> {
    return this.http.post(this._baseUrl, log)
      .map((res:any) => res.json())
      .catch((error:any) => Observable.throw(error));
  }

}
