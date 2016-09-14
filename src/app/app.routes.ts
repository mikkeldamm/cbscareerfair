import { Routes, RouterModule } from '@angular/router';

import { Home } from './home';
import { Positions } from './positions';
import { Profiles } from './profiles';
import { Companies } from './companies';
import { Company } from './company';
import { Register } from './register';
import { ThankYou } from './thankyou';

export const ROUTES: Routes = [
    { path: '', component: Home },
    { path: 'positions', component: Positions },
    { path: 'profiles', component: Profiles },
    { path: 'companies', component: Companies },
    { path: 'company/:name', component: Company },
    { path: 'register', component: Register },
    { path: 'thankyou', component: ThankYou },
    { path: '**', component: Home },
];