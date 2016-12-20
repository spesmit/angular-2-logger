import {Injectable, Optional} from '@angular/core';

export abstract class HttpConfigBase {

}

@Injectable()
export class HttpConfig {

  constructor(@Optional() httpConfigBase? : HttpConfigBase) {

  }

}
