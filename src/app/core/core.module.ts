import {NgModule}      from '@angular/core';

import {LoggerModule} from "./logger/logger.module";
import {HttpCoreModule} from "./http/http.module";
import {AuthModule} from "./auth/auth.module";

@NgModule({
  imports: [HttpCoreModule, LoggerModule, AuthModule],
})

export class CoreModule {
}
