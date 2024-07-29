import { Component, OnInit } from '@angular/core';
import packageJson from '../../../../../../package.json';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { SidebarMenuComponent } from '../sidebar/sidebar-menu/sidebar-menu.component';
import { TabsComponent } from './tabs/tabs.component';

@Component({
  selector: 'app-seller',
  standalone: true,
  // imports: [AngularSvgIconModule],
  templateUrl: './seller.component.html',
  styleUrl: './seller.component.scss',
  imports: [NgClass, NgIf, AngularSvgIconModule, RouterLink, TabsComponent],
})
export class SellerComponent implements OnInit {
  public appJson: any = packageJson;

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {}

  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }
}