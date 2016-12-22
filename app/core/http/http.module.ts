import {NgModule}      from '@angular/core';
import {HttpModule, Http, ResponseOptions, RequestOptions}      from '@angular/http';
import {HttpCoreService} from "./service/http.service";
import {HttpRequestOptions} from "./request/http-request.options";
import {HttpResponseOptions} from "./response/http-response.options";
import {BaseHttpOptions} from "./options/http.options.base";
import {HttpOptions} from "./options/http.options";

@NgModule({
  imports: [HttpModule],
  providers: [
    {provide: RequestOptions, useClass: HttpRequestOptions},
    {provide: ResponseOptions, useClass: HttpResponseOptions},
    {provide: HttpOptions, useClass: BaseHttpOptions},
    {provide: Http, useClass: HttpCoreService}
  ]
})

export class HttpCoreModule {

}
