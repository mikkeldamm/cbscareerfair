import { Component } from '@angular/core';

import { StateService } from '../store';

@Component({
  selector: 'company',
  styleUrls: [ './company.style.scss' ],
  templateUrl: './company.template.html'
})
export class Company {

  constructor(public _state: StateService) {

  }
}