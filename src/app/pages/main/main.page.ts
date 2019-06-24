import { City } from 'src/app/models/City';
import { SelectionCityService } from 'src/app/services/selection-city-service/selection-city.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage {
  citySelected = this._SCS.getSelectedCity();
  constructor(private _SCS: SelectionCityService) {}
}
