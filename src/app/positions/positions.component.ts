import { Component } from '@angular/core';

import { StateService } from '../store';

@Component({
  selector: 'positions',
  styleUrls: [ './positions.style.scss' ],
  templateUrl: './positions.template.html'
})
export class Positions {

  constructor(public _state: StateService) {

  }
}