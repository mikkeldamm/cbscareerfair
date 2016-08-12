import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';

import { StoreService, StateService } from '../store';

export const APPLICATION_PROVIDERS = [
    StoreService,
    StateService,
    ...HTTP_PROVIDERS,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
];

export const PROVIDERS = [
    ...APPLICATION_PROVIDERS
];
