// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { App } from './app/app';

document.addEventListener('mouseover', async (event) => {
  const { bootstrapApplication } = await import('@angular/platform-browser');
  const { appConfig } = await import('./app/app.config');
  const { App } = await import('./app/app');

  bootstrapApplication(App, appConfig).catch((err) => console.error(err));
}, { once: true });
