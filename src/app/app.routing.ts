import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./views/views.module').then((m) => m.ViewsModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRouting {}
