import {LogType} from '../enums/logger-type.enum';

export class Log {

  constructor(message: string, type: LogType) {
    this.message = message;
    this.type = type;
  }

  type : LogType;
  message : string;
}
