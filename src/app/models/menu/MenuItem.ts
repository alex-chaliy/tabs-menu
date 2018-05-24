import { IMenuItem } from './IMenuItem';

export class MenuItem implements IMenuItem {
  url: string;
  text: string;

  constructor(o: MenuItem = <MenuItem>{}) {
    this.url = o.url || '';
    this.text = o.text || '';
  }
}
