import {Injectable} from "@angular/core";
import {BaseResponseOptions} from "@angular/http";

@Injectable()
export class HttpResponseOptions extends BaseResponseOptions {
  constructor() {
    super();
  }
}
