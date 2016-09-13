import { Routes, RouterModule } from '@angular/router';

import { Home } from './home';
import { Positions } from './positions';
import { Profiles } from './profiles';
import { Companies } from './companies';
import { Company } from './company';

export const ROUTES: Routes = [
    { path: '', component: Home },
    { path: 'positions', component: Positions },
    { path: 'profiles', component: Profiles },
    { path: 'companies', component: Companies },
    { path: 'company', component: Company },
    { path: '**', component: Home },
];