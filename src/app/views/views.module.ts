import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ViewsRouting } from './views.routing';

@NgModule({
  imports: [SharedModule, ViewsRouting],
  declarations: [HomeComponent],
})
export class ViewsModule {}
