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
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import { TranslateModule } from '@ngx-translate/core';
import {InputTextareaModule} from 'primeng/inputtextarea';


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
    InputTextareaModule
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
    InputTextareaModule
  ],
  declarations: [SidebarComponent],
})
export class SharedModule {}
