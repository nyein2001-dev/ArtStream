import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import { NavbarSubmenuComponent } from '../navbar-submenu/navbar-submenu.component';
import { NgFor, NgClass } from '@angular/common';
import { MenuItem } from '../../../../../core/models/menu.model';

@Component({
    selector: 'app-navbar-menu',
    templateUrl: './navbar-menu.component.html',
    styleUrls: ['./navbar-menu.component.scss'],
    standalone: true,
    imports: [
        NgFor,
        NgClass,
        NavbarSubmenuComponent,
    ],
})
export class NavbarMenuComponent implements OnInit {
  private showMenuClass = ['scale-100', 'animate-fade-in-up', 'opacity-100', 'pointer-events-auto'];
  private hideMenuClass = ['scale-95', 'animate-fade-out-down', 'opacity-0', 'pointer-events-none'];

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {}

  public toggleMenu(menu: MenuItem): void {
    menu.selected = !menu.selected;
  }

}
