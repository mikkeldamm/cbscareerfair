import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Routes
import { ROUTES } from './app.routes';

// Store
import { StateService, StoreService } from './store';

// Components/directives
import { App } from './app.component';
import { Home } from './home';
import { Positions } from './positions';
import { Profiles, ProfilesGuard } from './profiles';
import { Companies, CompaniesGuard } from './companies';
import { Company } from './company';
import { Register } from './register';
import { ThankYou  } from './thankyou';

@NgModule({
    bootstrap: [
        App
    ],
    declarations: [
        App,
        Home,
        Positions,
        Profiles,
        Companies,
        Company,
        Register,
        ThankYou
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(ROUTES, { useHash: true })
    ],
    providers: [
        ProfilesGuard,
        CompaniesGuard,
        StateService,
        StoreService
    ]
})
export class AppModule { }