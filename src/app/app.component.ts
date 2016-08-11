import { Component, ViewEncapsulation } from '@angular/core';

import { Title, Actions, Select } from './components';

@Component({
    selector: 'cbs-app',
    encapsulation: ViewEncapsulation.None,
    styles: [ require('./app.scss') ],
    template: require('./app.html'),
    directives: [ Title, Actions, Select ]
})
export class App {

    selectItems: string[] = [];

    action: Action;
    actionsModel: ActionsModel;

    hideActions: boolean = false;
    hideSelect: boolean = true;
    hideCompanies: boolean = true;

    constructor() {

        this.actionsModel = new ActionsModel();
    }

    selectPosition() {

        this.action =  Action.position;
        this.hideActions = true;
        this.hideSelect = false;
        this.selectItems = ['Position1','Position2','Position3','Position4','Position5'];
    }

    selectProfile() {

        this.action =  Action.profile;
        this.hideActions = true;
        this.hideSelect = false;
        this.selectItems = ['Profile1','Profile2','Profile3','Profile4','Profile5'];
    }

    backToMain() {

        this.hideActions = false;
        this.hideSelect = true;
        this.hideCompanies = true;
    }

    selectItemSelected(item: string) {

        if (this.action === Action.position) {
            this.actionsModel.position = item;
        } else if (this.action === Action.profile) {
            this.actionsModel.profile = item;
        }

        if (this.actionsModel.isValid()) {

            this.showCompanies();

        } else {
        
            this.hideActions = false;
            this.hideSelect = true;
        }
    }

    showCompanies() {

        this.hideCompanies = false;
        this.hideActions = true;
        this.hideSelect = true;
    }
}

enum Action {
    none = 0,
    position = 1,
    profile = 2
}

class ActionsModel {

    position: string;
    profile: string;

    isValid() {
        return this.position && this.profile;
    }
}