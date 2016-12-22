import {NgModule}      from '@angular/core';
import {AuthService} from "./service/impl/auth.service";

@NgModule({
  providers: [
    AuthService
  ]
})
export class AuthModule {
}
