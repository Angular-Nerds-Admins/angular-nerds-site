import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shell').then((m) => m.Shell),
    children: [
      {
        path: '',
        loadComponent: () => import('./landing/landing').then((m) => m.Landing),
      },
      { path: '**', redirectTo: '' },
    ],
  },
];
