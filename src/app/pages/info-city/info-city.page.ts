import { Component } from '@angular/core';
import { SelectionCityService } from 'src/app/services/selection-city-service/selection-city.service';

@Component({
  selector: 'app-info-city',
  templateUrl: './info-city.page.html',
  styleUrls: ['./info-city.page.scss'],
})
export class InfoCityPage {
  citySelected = this._SCS.getSelectedCity();

  constructor(private _SCS: SelectionCityService) { }
}
