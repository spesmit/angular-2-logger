import {Injectable} from '@angular/core';

@Injectable()
export class LoggerConfig {

  constructor() {
  }

  public getUrl() {
    return 'api/logging';
  }

}
