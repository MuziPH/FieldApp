import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDrillPage } from './list-drill.page';

describe('ListDrillPage', () => {
  let component: ListDrillPage;
  let fixture: ComponentFixture<ListDrillPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDrillPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDrillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
