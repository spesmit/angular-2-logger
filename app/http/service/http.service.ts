import {Injectable} from '@angular/core';
import {XHRBackend, RequestOptions, Http, Request, RequestOptionsArgs, Response} from "@angular/http";
import {HttpConfig} from "../configure/http.config";
import {Logger} from "../../logger/service/impl/logger.service";
import {Observable} from "rxjs/Rx";

@Injectable()
export class HttpCoreService extends Http {

  constructor(xhrBackend:XHRBackend, requestOptions:RequestOptions, httpConfig : HttpConfig, logger : Logger) {
    super(xhrBackend, requestOptions);
    logger.log('hi');
  }

}
