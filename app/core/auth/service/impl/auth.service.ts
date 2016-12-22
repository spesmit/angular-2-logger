import {Injectable} from '@angular/core';
import {AuthInterface} from "../auth.interface";
import {User} from "../../../common/domain/User";

@Injectable()
export class AuthService implements AuthInterface {

  private currentUser:User;

  setCurrentUser(user:User):void {
    this.currentUser = user;
  }

  getCurrentUser():User|void {
    if (this.currentUser) return this.currentUser;
  }

}
