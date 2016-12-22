import {Component, OnInit} from '@angular/core';
import {Logger} from "./core/logger/service/impl/logger.service";
import {Http} from "@angular/http";

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
    this.http.get('help.jso').subscribe(
      (res:any)=> res,
      (error:any) => error);
  }


}
