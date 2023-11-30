import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasDetailsComponent } from './pessoas-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('PessoasDetailsComponent', () => {
  let component: PessoasDetailsComponent;
  let fixture: ComponentFixture<PessoasDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoasDetailsComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(PessoasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
