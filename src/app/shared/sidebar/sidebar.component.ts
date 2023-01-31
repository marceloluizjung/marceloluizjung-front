import { Component } from '@angular/core';

@Component({
  selector: 'sidebar',
  styleUrls: ['./sidebar.component.scss'],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  public visibleSidebar: boolean;

  public sidebarItems: { name: string; icon: string }[] = [
    {
      name: 'Home',
      icon: 'pi pi-home',
    },
    {
      name: 'About Us',
      icon: 'pi pi-ellipsis-h',
    },
    {
      name: 'Tools',
      icon: 'pi pi-cog',
    },
  ];

  public sidebarLanguages: { language: string; flag: string }[] = [
    {
      language: 'Portugês',
      flag: 'assets/images/flags/brasil.png',
    },
    {
      language: 'Inglês',
      flag: 'assets/images/flags/estados-unidos.png',
    },
    {
      language: 'Espanhol',
      flag: 'assets/images/flags/spain.png',
    },
  ];

  public sidebarMessage: string =
    'Reveste-se de força e dignidade; sorri diante do futuro. Provérbios 31:25';
}
