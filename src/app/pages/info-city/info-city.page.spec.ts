import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCityPage } from './info-city.page';

describe('InfoCityPage', () => {
  let component: InfoCityPage;
  let fixture: ComponentFixture<InfoCityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
