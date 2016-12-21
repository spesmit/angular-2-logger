import {Injectable, Optional} from '@angular/core';
import {Headers} from "@angular/http";

export abstract class HttpConfigBase {

}

@Injectable()
export class HttpConfig {

  private headers : Headers|{};

  constructor(@Optional() httpConfigBase? : HttpConfigBase) {

  }

  public getHeaders() : Headers|{} {
    return this.headers;
  }

}
