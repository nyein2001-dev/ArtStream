import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-profile-menu',
  standalone: true,
  imports: [NgClass, RouterLink, AngularSvgIconModule],
  templateUrl: './profile-menu.component.html',
  styleUrl: './profile-menu.component.scss'
})
export class ProfileMenuComponent implements OnInit {
  public isOpen = false;

  constructor() { }

  ngOnInit(): void { }

  public toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

}
