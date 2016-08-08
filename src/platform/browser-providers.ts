import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import { provideRouter } from '@angular/router';

import { routes } from '../app/app.routes';

export const APPLICATION_PROVIDERS = [
  provideRouter(routes),
  ...HTTP_PROVIDERS,
  { provide: LocationStrategy, useClass: HashLocationStrategy }
];

export const PROVIDERS = [
  ...APPLICATION_PROVIDERS
];
