import { Routes, RouterModule } from '@angular/router';

import { Home } from './home';
import { Positions } from './positions';
import { Profiles } from './profiles';
import { Companies, CompaniesGuard } from './companies';
import { Company } from './company';
import { Register } from './register';
import { ThankYou } from './thankyou';

export const ROUTES: Routes = [
    { path: '', component: Home, data: { front: true } },
    { path: 'positions', component: Positions },
    { path: 'profiles', component: Profiles },
    { path: 'companies', component: Companies, canActivate: [CompaniesGuard]  },
    { path: 'company/:name', component: Company },
    { path: 'registration', component: Register },
    { path: 'thankyou', component: ThankYou },
    { path: '**', component: Home },
];