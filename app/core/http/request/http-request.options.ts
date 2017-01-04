import {Injectable} from '@angular/core';
import {BaseRequestOptions}  from '@angular/http';
import {AuthService} from "../../auth/service/impl/auth.service";

@Injectable()
export class HttpRequestOptions extends BaseRequestOptions {

  constructor(private authService : AuthService) {
    super();

    let user = authService.getCurrentUser();

    // defaults
    this.headers.set('Content-Type', 'application/json');
    this.headers.set('Authorization', user.getAToken())

  }

}
