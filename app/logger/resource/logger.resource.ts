import {Injectable} from '@angular/core';
import {Response}  from '@angular/http';

import {LoggerConfig} from '../config/logger.config';
import {Log} from '../domain/Log';
import {Observable}     from 'rxjs/Observable';
import './http/rx-js.operaters';
import {LoggerHttpService} from "./http/logger-http.service";

@Injectable()
export class LoggerResource {
  private _baseUrl:string;

  constructor(private http:LoggerHttpService, private loggerConfig:LoggerConfig) {
    this._baseUrl = loggerConfig.getUrl();
  }

  public serverLog(log:Log):Observable<Log> {
    return this.http.post(this._baseUrl, log)
      .map(this.extractData)
      .catch(this.handleError)
  }

  private extractData(res:Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error:Response | any) {
    return Observable.throw(error);
  }

}
