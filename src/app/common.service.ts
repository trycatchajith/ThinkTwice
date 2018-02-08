import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CommonService {
  private headerText = new BehaviorSubject<string>('Dashboard');
  cast = this.headerText.asObservable();
    constructor() { }
    changeHeader(header) {
      this.headerText.next(header);
    }

}
