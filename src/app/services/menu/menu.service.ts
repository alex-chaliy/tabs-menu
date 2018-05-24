import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from '../../models/menu/MenuItem';

@Injectable()
export class MenuService {

  constructor() { }

  getItems(): Observable<MenuItem[]> {
    return new Observable(observer => {
      let items: MenuItem[] = [
        new MenuItem({url: 'general', text: 'General'}),
        new MenuItem({url: 'integrations', text: 'Integrations'})
      ];
      observer.next(items);
    });
  }

}
