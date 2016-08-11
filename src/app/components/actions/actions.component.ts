import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'cbs-actions',
    styles: [ require('./actions.scss') ],
    template: require('./actions.html')
})
export class Actions implements OnInit {

    position: string;
    profile: string;

    constructor() {

    }
}