import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientesDetailsComponent } from './ingredientes-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('IngredientesDetailsComponent', () => {
  let component: IngredientesDetailsComponent;
  let fixture: ComponentFixture<IngredientesDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngredientesDetailsComponent],
       imports: [HttpClientTestingModule, RouterTestingModule, FormsModule ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],         });
    fixture = TestBed.createComponent(IngredientesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
