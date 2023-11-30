import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasListComponent } from './pessoas-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('PessoasListComponent', () => {
  let component: PessoasListComponent;
  let fixture: ComponentFixture<PessoasListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoasListComponent],
       imports: [HttpClientTestingModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],         });
    fixture = TestBed.createComponent(PessoasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
