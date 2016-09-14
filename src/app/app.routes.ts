import { Routes, RouterModule } from '@angular/router';

import { Home } from './home';
import { Positions } from './positions';
import { Profiles, ProfilesGuard } from './profiles';
import { Companies, CompaniesGuard } from './companies';
import { Company } from './company';
import { Register } from './register';
import { ThankYou } from './thankyou';

export const ROUTES: Routes = [
    { path: '', component: Home },
    { path: 'positions', component: Positions },
    { path: 'profiles', component: Profiles, canActivate: [ProfilesGuard] },
    { path: 'companies', component: Companies, canActivate: [CompaniesGuard]  },
    { path: 'company/:name', component: Company },
    { path: 'registration', component: Register },
    { path: 'thankyou', component: ThankYou },
    { path: '**', component: Home },
];