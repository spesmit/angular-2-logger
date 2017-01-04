export interface LoggerInterface {
  info(...args:any[]):void;
  debug(...args:any[]):void;
  warn(...args:any[]):void;
  log(...args:any[]):void;
  error(...args:any[]):void;
  getInstance(instance:string):LoggerInterface;
}
