import {NgModule, forwardRef}      from '@angular/core';
import {HttpModule, Http}      from '@angular/http';
import {HttpConfig} from "./config/http.config";
import {HttpCoreService} from "./service/http.service";
import {Logger} from "../logger/service/impl/logger.service";
import {LoggerModule} from "../logger/logger.module";
import {LoggerResource} from "../logger/resource/logger.resource";
import {HttpRequestOptions} from "./request/http-request.options";

@NgModule({
  imports: [HttpModule],
  providers: [{provide: Http, useClass: HttpCoreService}, HttpConfig, HttpRequestOptions]
})

export class HttpCoreModule {

}
