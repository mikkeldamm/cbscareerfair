import { Component, ViewEncapsulation } from '@angular/core';

import { Title, Actions, Select } from './components';

@Component({
    selector: 'cbs-app',
    encapsulation: ViewEncapsulation.None,
    styles: [ require('./app.scss') ],
    template: require('./app.html'),
    directives: [ Title, Actions, Select ]
})
export class App {}