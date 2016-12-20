import {NgModule, forwardRef}      from '@angular/core';
import {HttpModule, Http}      from '@angular/http';
import {HttpConfig} from "./configure/http.config";
import {HttpCoreService} from "./service/http.service";
import {Logger} from "../logger/service/impl/logger.service";
import {LoggerModule} from "../logger/logger.module";
import {LoggerResource} from "../logger/resource/logger.resource";

@NgModule({
  imports: [HttpModule],
  providers: [{provide: Http, useClass: HttpCoreService}, HttpConfig]
})

export class HttpCoreModule {

}
