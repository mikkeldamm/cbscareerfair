import { Component } from '@angular/core';

import { StateService } from '../store';

@Component({
  selector: 'companies',
  styleUrls: [ './companies.style.scss' ],
  templateUrl: './companies.template.html'
})
export class Companies {

  constructor(public _state: StateService) {

  }
}