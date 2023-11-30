import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaborDetailsComponent } from './sabor-details.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('SaborDetailsComponent', () => {
  let component: SaborDetailsComponent;
  let fixture: ComponentFixture<SaborDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaborDetailsComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(SaborDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
