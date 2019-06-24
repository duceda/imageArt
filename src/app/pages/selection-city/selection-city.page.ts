import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/City';
import { SelectionCityService } from 'src/app/services/selection-city-service/selection-city.service';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-selection-city',
  animations: [
    trigger(
      'showIcon', [
        state('hiddenIcon', style({ opacity: 0 })),
        state('show', style({ opacity: 1 })),
        transition('hiddenIcon=>show', animate('3000ms'))
      ]
    )
  ],
  templateUrl: './selection-city.page.html',
  styleUrls: ['./selection-city.page.scss'],
})
export class SelectionCityPage implements OnInit {
  cities: Array<City>;
  citySelected: City;
  currentState = 'hiddenIcon';

  constructor(private _SCS: SelectionCityService) { }

  ngOnInit() {
    this.cities = this._SCS.getCities();
  }

  selectCity(): void {
    this._SCS.selectedCity = this.citySelected;
  }

  manageAnimations(): void {
    this.currentState = 'show';
  }

  goToTheMainMenu(): void {
    
  }
}
