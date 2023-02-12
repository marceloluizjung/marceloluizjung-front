import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ACCEPT_LANGUAGES } from 'src/app/app.module';

@Component({
  selector: 'sidebar',
  styleUrls: ['./sidebar.component.scss'],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  constructor(private translate: TranslateService, private router: Router) {}
  public visibleSidebar: boolean = false;

  public sidebarItems: {
    name: string;
    icon: string;
    route?: string;
    showChildren?: boolean;
    children?: any[];
  }[] = [
    {
      name: this.translate.instant('marceloluizjungfront.home'),
      icon: 'pi pi-home',
      route: '/home',
    },
    {
      name: this.translate.instant('marceloluizjungfront.aboutus'),
      icon: 'pi pi-ellipsis-h',
      route: '/aboutus',
    },
    {
      name: this.translate.instant('marceloluizjungfront.tools'),
      icon: 'pi pi-wrench',
      showChildren: false,
      children: [
        {
          name: this.translate.instant(
            'marceloluizjungfront.unicodetextconverter'
          ),
          route: '/unicode-text-converter',
        },
        {
          name: this.translate.instant(
            'marceloluizjungfront.jsonpath'
          ),
          route: '/jsonpath',
        },
      ],
    },
  ];

  public sidebarLanguages: { language: string; flag: string }[] = [
    {
      language: ACCEPT_LANGUAGES[0],
      flag: 'assets/images/flags/brasil.png',
    },
    {
      language: ACCEPT_LANGUAGES[1],
      flag: 'assets/images/flags/estados-unidos.png',
    },
    {
      language: ACCEPT_LANGUAGES[2],
      flag: 'assets/images/flags/spain.png',
    },
  ];

  public sidebarMessage: string = this.translate.instant(
    'marceloluizjungfront.sidebarmessage'
  );

  public storageLanguage: String | null =
    localStorage.getItem('language') || ACCEPT_LANGUAGES[0];

  public isBlackTheme: boolean = JSON.parse(
    localStorage.getItem('isBlackTheme') ||
      String(
        window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches
      ) ||
      'false'
  );

  @Output()
  private themeEvent = new EventEmitter<boolean>();

  @Input()
  public activeLink: string = String();

  /**
   * Troca de linguagem.
   *
   * @param sidebarLanguage - Linguagem selecionada.
   */
  public changeLanguage(sidebarLanguage: string) {
    localStorage.setItem('language', sidebarLanguage);
    location.reload();
  }

  /**
   * Seleciona o dark mode da aplicação.
   *
   * @param isBlackTheme - Indicação do dark mode selecionado.
   */
  public changeTheme(isBlackTheme: boolean) {
    localStorage.setItem('isBlackTheme', String(isBlackTheme));
    this.isBlackTheme = isBlackTheme;
    this.themeEvent.emit(isBlackTheme);
  }

  public sidebarNavigate(route?: string) {
    if (route) this.router.navigateByUrl(route);
    this.closeSidebar();
  }

  public closeSidebar() {
    this.visibleSidebar = false;
  }

  public openOnWhatsApp() {
    window.open('https://wa.me/+5547999042339', '_blank');
  }
}
