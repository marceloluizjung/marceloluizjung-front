import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { UnicodeTextConverterComponent } from './tools/unicode-text-converter/unicode-text-converter.component';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'unicode-text-converter', component: UnicodeTextConverterComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ViewsRouting {}
