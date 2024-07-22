import { Injectable, OnDestroy, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, SubMenuItem } from '../../../core/models/menu.model';
import { single } from 'rxjs';
import { Menu } from '../../../core/constants/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements OnDestroy {
  private _showSidebar = signal(true);
  private _pagesMenu = signal<MenuItem[]>([]);

  constructor(private router: Router) {
    this._pagesMenu.set(Menu.pages)
  }

  get showSideBar() {
    return this._showSidebar();
  }

  get pagesMenu() {
    return this._pagesMenu();
  }

  set showSideBar(value: boolean) {
    this._showSidebar.set(value);
  }

  public toggleSidebar() {
    this._showSidebar.set(!this._showSidebar());
  }

  public toggleMenu(menu: any) {
    this.showSideBar = true;
    menu.expanded = !menu.expanded;
  }

  public toggleSubMenu(subMenu: SubMenuItem) {
    subMenu.expanded = !subMenu.expanded;
  }

  ngOnDestroy(): void { }
}
