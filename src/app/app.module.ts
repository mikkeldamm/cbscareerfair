import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Routes
import { ROUTES } from './app.routes';

// Store
import { StateService, StoreService } from './store';

// Components/directives
import { App } from './app.component';
import { Home } from './home';
import { HomeBig } from './home-big';
import { Positions } from './positions';
import { Profiles } from './profiles';
import { Companies, CompaniesGuard } from './companies';
import { Company } from './company';
import { CompanyMap } from './company';
import { Register } from './register';
import { ThankYou  } from './thankyou';

@NgModule({
    bootstrap: [
        App
    ],
    declarations: [
        App,
        Home,
        HomeBig,
        Positions,
        Profiles,
        Companies,
        Company,
        CompanyMap,
        Register,
        ThankYou
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(ROUTES, { useHash: false })
    ],
    providers: [
        CompaniesGuard,
        StateService,
        StoreService
    ]
})
export class AppModule { }