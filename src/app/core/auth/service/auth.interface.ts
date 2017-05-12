import {User} from "../../common/domain/User";

export interface AuthInterface {
  getCurrentUser():User|void;
}
