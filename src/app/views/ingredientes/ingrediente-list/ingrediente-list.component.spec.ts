import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredienteListComponent } from './ingrediente-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('IngredienteListComponent', () => {
  let component: IngredienteListComponent;
  let fixture: ComponentFixture<IngredienteListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngredienteListComponent],
       imports: [HttpClientTestingModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],         });
    fixture = TestBed.createComponent(IngredienteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
