import { Routes } from '@angular/router';
import { Shell } from './shell/shell';

export const routes: Routes = [
  {
    path: 'landing',
    loadChildren: () => import('./shell/routes').then((m) => m.routes),
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login').then((m) => m.Login),

  },
  { path: '**', redirectTo: 'landing' },
];
