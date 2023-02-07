import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UnicodeTextConverterComponent } from './tools/unicode-text-converter/unicode-text-converter.component';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'unicode-text-converter', component: UnicodeTextConverterComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ViewsRouting {}
