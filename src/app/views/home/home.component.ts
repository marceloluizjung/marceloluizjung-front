import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(public translate: TranslateService, public router: Router) {}

  public start() {
    this.router.navigateByUrl("/aboutus");
  }
}
