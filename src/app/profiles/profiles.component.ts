import { Component } from '@angular/core';

import { StateService } from '../store';

@Component({
  selector: 'profiles',
  styleUrls: [ './profiles.style.scss' ],
  templateUrl: './profiles.template.html'
})
export class Profiles {

  constructor(public _state: StateService) {

  }
}