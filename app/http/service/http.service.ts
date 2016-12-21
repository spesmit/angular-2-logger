import {Injectable} from '@angular/core';
import {XHRBackend, RequestOptions, Http, Request, RequestOptionsArgs, Response} from "@angular/http";
import {HttpConfig} from "../config/http.config";
import {Logger} from "../../logger/service/impl/logger.service";
import {Observable} from "rxjs/Rx";
import {HttpRequestOptions} from "../request/http-request.options";

@Injectable()
export class HttpCoreService extends Http {

  constructor(xhrBackend:XHRBackend, requestOptions:HttpRequestOptions, httpConfig : HttpConfig, logger : Logger) {
    super(xhrBackend, requestOptions);
    logger.log('http');
  }

}
