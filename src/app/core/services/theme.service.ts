import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { effect, signal } from '@angular/core';
import { Theme } from '../models/theme.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public theme = signal<Theme>({ mode: 'dark', color: 'base' });

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.loadTheme();
      effect(() => {
        this.setTheme();
      });
    }
  }

  private loadTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const theme = localStorage.getItem('theme');
      if (theme) {
        this.theme.set(JSON.parse(theme));
      }
    }
  }

  private setTheme() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', JSON.stringify(this.theme()));
      this.setThemeClass();
    }
  }

  public get isDark(): boolean {
    return this.theme().mode == 'dark';
  }

  private setThemeClass() {
    if (isPlatformBrowser(this.platformId)) {
      document.querySelector('html')!.className = this.theme().mode;
      document.querySelector('html')!.setAttribute('data-theme', this.theme().color);
    }
  }
}
