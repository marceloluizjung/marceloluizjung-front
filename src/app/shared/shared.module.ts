import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DropdownModule } from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule,
    SidebarModule,
    ButtonModule,
    DropdownModule,
    InputSwitchModule
  ],
  exports: [
    CommonModule,
    AccordionModule,
    SidebarModule,
    ButtonModule,
    SidebarComponent,
    DropdownModule,
    InputSwitchModule
  ],
  declarations: [SidebarComponent],
})
export class SharedModule {}
