import {NgModule}      from '@angular/core';
import {AuthService} from "./service/impl/auth.service";
import {User} from "../common/domain/User";

@NgModule({
  providers: [
    AuthService
  ]
})
export class AuthModule {
  constructor(private authService : AuthService) {
    authService.setCurrentUser(new User('test', '123412341241234'));
  }
}
