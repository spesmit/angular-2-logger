import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {Logger} from "./core/logger/service/impl/logger.service";

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent implements OnInit {
  name = 'Angular';

  constructor(private logger:Logger, private http: Http) {
  }

  ngOnInit() {
    this.logger.log('test', 'test2', 'test3');
    this.logger.error('test', 'test2', 'test3');
    this.logger.info('test', 'test2', 'test3');
    this.http.get('help.json').subscribe(
      (res:any)=> res,
      (error:any) => error);

    let logger_instance = this.logger.getInstance('prepend');
    logger_instance.log('test', 'test2', 'test3');

  }


}
