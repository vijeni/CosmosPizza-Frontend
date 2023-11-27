import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamanhoDetailsComponent } from './tamanho-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('TamanhoDetailsComponent', () => {
  let component: TamanhoDetailsComponent;
  let fixture: ComponentFixture<TamanhoDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TamanhoDetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(TamanhoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
