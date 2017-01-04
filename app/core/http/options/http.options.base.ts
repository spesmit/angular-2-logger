import {HttpOptions} from "./http.options";
import {Injectable} from "@angular/core";

@Injectable()
export class BaseHttpOptions extends HttpOptions {
  constructor() {
    super({httpLogging : {error : 'error', success : 'info'}});
  }
}
