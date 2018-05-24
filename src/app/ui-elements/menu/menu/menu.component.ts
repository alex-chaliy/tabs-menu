import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../services/menu/menu.service';
import { MenuItem } from '../../../models/menu/MenuItem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[] = [];

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.menuService.getItems()
      .subscribe(items => this.menuItems = items);
  }

}
