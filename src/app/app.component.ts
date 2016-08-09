import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        './app.style.css'
    ],
    template: `
      <div>Mikkel Damm</div>
    `
})
export class App {
  
    constructor() {

    }
}