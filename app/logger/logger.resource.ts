import {Injectable} from '@angular/core';
import {Http, Response}  from '@angular/http';

import {LoggerConfig} from './logger.config';
import {Log} from './Log';
import {Observable}     from 'rxjs/Observable';
import '../http/rx-js.operaters';

@Injectable()
export class LoggerResource {
  private _baseUrl:string;

  constructor(private http:Http, private loggerConfig:LoggerConfig) {
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
    console.error(error);
    return Observable.throw(error);
  }

}
