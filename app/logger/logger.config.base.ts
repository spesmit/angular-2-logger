import {LogType} from "./logger-type.enum";
export class LoggerConfigBase {
  url?:string;
  methods?:LogType[];
  consoleEnabled?:boolean;
  serverEnabled?:boolean;
}
