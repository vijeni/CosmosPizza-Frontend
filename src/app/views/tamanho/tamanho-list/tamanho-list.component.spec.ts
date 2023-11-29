import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamanhoListComponent } from './tamanho-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('TamanhoListComponent', () => {
  let component: TamanhoListComponent;
  let fixture: ComponentFixture<TamanhoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TamanhoListComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(TamanhoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
