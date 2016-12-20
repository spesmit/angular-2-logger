import {Injectable, Optional} from '@angular/core';

import {LogType} from '../domain/logger-type.enum';

export abstract class LoggerConfigBase {
  url?:string;
  methods?:LogType[];
  consoleEnabled?:boolean;
  serverEnabled?:boolean;
}

@Injectable()
export class LoggerConfig {

  private url:string = 'api/logging';
  private methods:LogType[] = [LogType.debug, LogType.warn, LogType.info, LogType.error, LogType.log];
  private consoleEnabled:boolean = true;
  private serverEnabled:boolean = false;

  constructor(@Optional() loggerConfigBase:LoggerConfigBase) {
    if (loggerConfigBase) {
      this.methods = loggerConfigBase.methods || this.methods;
      this.consoleEnabled = loggerConfigBase.consoleEnabled || this.consoleEnabled;
      this.url = loggerConfigBase.url || this.url;
      this.serverEnabled = loggerConfigBase.serverEnabled || this.serverEnabled;
    }
  }

  public getUrl():string {
    return this.url;
  }

  public getMethods():LogType[] {
    return this.methods;
  };

  public getConsoleEnabled():boolean {
    return this.consoleEnabled;
  }

  public getServerEnabled():boolean {
    return this.serverEnabled;
  }

}
