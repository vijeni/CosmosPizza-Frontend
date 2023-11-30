import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaborListaComponent } from './sabor-lista.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { DecimalPipe } from '@angular/common';

describe('SaborListaComponent', () => {
  let component: SaborListaComponent;
  let fixture: ComponentFixture<SaborListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaborListaComponent],
       imports: [HttpClientTestingModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],   
    providers: [DecimalPipe] 
  });
    fixture = TestBed.createComponent(SaborListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
