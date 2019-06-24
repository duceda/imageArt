import { Injectable } from '@angular/core';
import { City } from 'src/app/models/City';

@Injectable({
  providedIn: 'root'
})
export class SelectionCityService {
  cities = new Array<City>();
  selectedCity: City;

  constructor() { }

  getCities(): Array<City> {
    const city1 = new City('Barcelona', 1, '/assets/icon/iconCathedralBarcelona.png');
    const city2 = new City('Burgos', 2, '/assets/icon/iconCathedralBurgos.png');
    const city3 = new City('Madrid', 3, '/assets/icon/iconMonumentMadrid.png');

    this.cities.push(city1, city2, city3);

    return this.cities;
  }

  getSelectedCity(): City {
    return this.selectedCity;
  }
}
