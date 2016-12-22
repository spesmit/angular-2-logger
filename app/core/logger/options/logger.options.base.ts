import {Injectable} from "@angular/core";
import {LoggerOptions} from "./logger.options";
import {LogType} from "../enums/logger-type.enum";

@Injectable()
export class BaseLoggerOptions extends LoggerOptions {
  constructor() {
    super({
      url: 'api/logging',
      methods: [LogType.debug, LogType.warn, LogType.info, LogType.error, LogType.log],
      consoleEnabled: true,
      serverEnabled: false
    });
  }
}
