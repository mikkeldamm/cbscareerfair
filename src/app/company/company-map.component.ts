import { Component, Input } from '@angular/core';

@Component({
    selector: 'company-map',
    styleUrls: ['./company-map.style.scss'],
    templateUrl: './company-map.template.html'
})
export class CompanyMap {

    @Input() map: number = 0;
}