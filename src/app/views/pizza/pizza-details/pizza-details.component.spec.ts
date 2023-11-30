import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaDetailsComponent } from './pizza-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('PizzaDetailsComponent', () => {
  let component: PizzaDetailsComponent;
  let fixture: ComponentFixture<PizzaDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaDetailsComponent],
       imports: [HttpClientTestingModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],         });
    fixture = TestBed.createComponent(PizzaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
