import {Injectable} from '@angular/core';
import {Http}      from '@angular/http';
import {Log} from '../domain/Log';
import {Observable}     from 'rxjs/Observable';
import './http/rx-js.operaters';
import {LoggerOptions} from "../options";
import {Subscription} from "rxjs/Rx";

@Injectable()
export class LoggerResource {
  private _baseUrl:string;

  constructor(private http:Http, private loggerOptions:LoggerOptions) {
    this._baseUrl = loggerOptions.url;
  }

  public serverLog(log:Log):Subscription {
    return this.http.post(this._baseUrl, log)
      .map((res:any) => res.json())
      .catch((error:any) => {
        console.error(error);
        return Observable.of([]);
      }).subscribe();
  }

}
