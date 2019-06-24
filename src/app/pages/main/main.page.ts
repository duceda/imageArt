import { SelectionCityService } from 'src/app/services/selection-city-service/selection-city.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private _SCS: SelectionCityService) { }

  ngOnInit() {
    alert(this._SCS.getSelectedCity().getName);
  }

}
