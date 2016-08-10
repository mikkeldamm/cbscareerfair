import { Component, ViewEncapsulation } from '@angular/core';

import { Select } from './components';

@Component({
    selector: 'cbs-app',
    encapsulation: ViewEncapsulation.None,
    styles: [ require('./app.css') ],
    template: require('./app.html'),
    directives: [ Select ]
})
export class App {

    constructor() {

    }
}