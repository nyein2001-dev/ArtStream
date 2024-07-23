import { Component, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MenuService } from '../../services/menu.service';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    AngularSvgIconModule,
    NavbarMenuComponent,
    ProfileMenuComponent,
    NavbarMobileComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  constructor(private menuService: MenuService) { }

  ngOnInit(): void { }

  public toggleMobileMenu(): void {
    this.menuService.showMobileMenu = true;
  }
}
