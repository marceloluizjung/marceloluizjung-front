import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public activeLink: string = String();

  constructor(private router: Router) {}

  ngOnInit() {
    const routerEvents = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    );
    routerEvents.subscribe((event: any) => {
      this.activeLink = event.urlAfterRedirects;
    });
  }

  public isBlackTheme: boolean = JSON.parse(
    localStorage.getItem('isBlackTheme') || String(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) || 'false');

  public changeTheme() {
    this.isBlackTheme = JSON.parse(
      localStorage.getItem('isBlackTheme') || 'false'
    );
  }
}
