import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';

export const APPLICATION_PROVIDERS = [
    ...HTTP_PROVIDERS,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
];

export const PROVIDERS = [
    ...APPLICATION_PROVIDERS
];
