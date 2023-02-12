import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { JSONPathComponent } from './tools/jsonpath/jsonpath.component';
import { UnicodeTextConverterComponent } from './tools/unicode-text-converter/unicode-text-converter.component';
import { ViewsRouting } from './views.routing';

@NgModule({
  imports: [SharedModule, ViewsRouting],
  declarations: [
    HomeComponent,
    UnicodeTextConverterComponent,
    AboutusComponent,
    JSONPathComponent,
  ],
})
export class ViewsModule {}
