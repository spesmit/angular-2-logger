import {Injectable, ErrorHandler} from '@angular/core';
import {Logger} from "../service/impl/logger.service";

@Injectable()
export class LoggerErrorHandler implements ErrorHandler {
  constructor(private logger:Logger) {
  }

  handleError(error:any):void {
    //console.log(error);
    this.logger.error(error)
  }
}
