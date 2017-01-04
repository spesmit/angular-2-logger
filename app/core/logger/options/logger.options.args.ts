import {BaseRequestOptions} from "@angular/http";
import {LogType} from "../enums/logger-type.enum";

export interface LoggerOptionsArgs {
  url?:string;
  methods?:LogType[];
  consoleEnabled?:boolean;
  serverEnabled?:boolean;
  loggerRequestOptions?:BaseRequestOptions;
}
