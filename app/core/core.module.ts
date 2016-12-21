import {NgModule, ModuleWithProviders}      from '@angular/core';

import {HttpConfigBase} from "../http/config/http.config";
import {LoggerConfigBase} from "../logger/config/logger.config";
import {LoggerModule} from "../logger/logger.module";
import {HttpCoreModule} from "../http/http.module";
import {LoggerResource} from "../logger/resource/logger.resource";

@NgModule({
  imports: [HttpCoreModule, LoggerModule],
})

export class CoreModule {

  static forRoot(httpConfig:HttpConfigBase, loggerConfig:LoggerConfigBase):ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {provide: HttpConfigBase, useValue: httpConfig},
        {provide: LoggerConfigBase, useValue: loggerConfig}
      ]
    };
  }

}
