import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        './app.style.css'
    ],
    template: `
      <nav>
        <span>
          <a [routerLink]=" ['./'] ">
            Index
          </a>
        </span>
      |
        <span>
          <a [routerLink]=" ['./home'] ">
            Home
          </a>
        </span>
      </nav>
      <main>
        <router-outlet></router-outlet>
      </main>
    `
})
export class App {
  
    constructor() {

    }

    ngOnInit() {
        console.log('Initial App State');
    }
}