import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
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
    ReactiveFormsModule,
    AvatarModule,
    AvatarGroupModule,
    TranslateModule,
    InputTextareaModule,
    InputTextModule,
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
    ReactiveFormsModule,
    AvatarModule,
    AvatarGroupModule,
    TranslateModule,
    InputTextareaModule,
    InputTextModule,
  ],
  declarations: [SidebarComponent],
})
export class SharedModule {}
