import { Component, ViewEncapsulation } from '@angular/core';

import { Container, Select } from './components';

@Component({
    selector: 'cbs-app',
    encapsulation: ViewEncapsulation.None,
    styles: [ require('./app.scss') ],
    template: require('./app.html'),
    directives: [ Container, Select ]
})
export class App {}