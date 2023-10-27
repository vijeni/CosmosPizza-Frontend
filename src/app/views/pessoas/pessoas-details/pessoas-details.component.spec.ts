import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasDetailsComponent } from './pessoas-details.component';

describe('PessoasDetailsComponent', () => {
  let component: PessoasDetailsComponent;
  let fixture: ComponentFixture<PessoasDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoasDetailsComponent]
    });
    fixture = TestBed.createComponent(PessoasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
