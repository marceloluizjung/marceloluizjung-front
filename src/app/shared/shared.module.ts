import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule,
    SidebarModule,
    ButtonModule,
    DropdownModule,
    InputSwitchModule,
    AutoCompleteModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    AccordionModule,
    SidebarModule,
    ButtonModule,
    SidebarComponent,
    DropdownModule,
    InputSwitchModule,
    AutoCompleteModule,
    ReactiveFormsModule
  ],
  declarations: [SidebarComponent],
})
export class SharedModule {}
