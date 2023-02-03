import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public isBlackTheme: boolean = JSON.parse(
    localStorage.getItem('isBlackTheme') || 'false'
  );

  public changeTheme() {
    this.isBlackTheme = JSON.parse(
      localStorage.getItem('isBlackTheme') || 'false'
    );
  }
}
