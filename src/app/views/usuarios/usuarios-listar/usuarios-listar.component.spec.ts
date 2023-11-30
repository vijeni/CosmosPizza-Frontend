import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosListarComponent } from './usuarios-listar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DecimalPipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('UsuariosListarComponent', () => {
  let component: UsuariosListarComponent;
  let fixture: ComponentFixture<UsuariosListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariosListarComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [DecimalPipe]         });

    fixture = TestBed.createComponent(UsuariosListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
