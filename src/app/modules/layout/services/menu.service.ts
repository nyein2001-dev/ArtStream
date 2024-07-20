import { Injectable, OnDestroy, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements OnDestroy {
  private _showSidebar = signal(true);

  constructor(private router: Router) { }

  get showSideBar() {
    return this._showSidebar();
  }

  set showSideBar(value: boolean) {
    this._showSidebar.set(value);
  }

  public toggleSidebar() {
    this._showSidebar.set(!this._showSidebar());
  }

  ngOnDestroy(): void { }
}
