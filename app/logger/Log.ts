export class Log {

  constructor(message: string, type: string) {
    this.message = message;
    this.type = type;
  }

  type : string;
  message : string;
}
