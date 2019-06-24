import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionCityPage } from './selection-city.page';

describe('SelectionCityPage', () => {
  let component: SelectionCityPage;
  let fixture: ComponentFixture<SelectionCityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionCityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionCityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
