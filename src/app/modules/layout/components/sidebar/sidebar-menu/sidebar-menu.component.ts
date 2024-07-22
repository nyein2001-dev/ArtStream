import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import { SubMenuItem } from '../../../../../core/models/menu.model';
import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgFor,
    NgClass,
    AngularSvgIconModule,
    NgTemplateOutlet,
    RouterLink,
    RouterLinkActive,
    NgIf,
  ],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss'
})
export class SidebarMenuComponent implements OnInit {
  constructor(public menuService: MenuService) { }

  public toggleMenu(subMenu: SubMenuItem) {
    this.menuService.toggleSubMenu(subMenu);
  }

  ngOnInit(): void { }

}
