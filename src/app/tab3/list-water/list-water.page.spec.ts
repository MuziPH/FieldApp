import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWaterPage } from './list-water.page';

describe('ListWaterPage', () => {
  let component: ListWaterPage;
  let fixture: ComponentFixture<ListWaterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWaterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWaterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
