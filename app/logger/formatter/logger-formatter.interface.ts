export interface LoggerFormatterInterface {
  info(arg:any):any;
  debug(arg:any):any;
  warn(arg:any):any;
  log(arg:any):any;
  error(arg:any):any;
  pre(args:any[]):any[];
  post(args:any[]):any[];
}
