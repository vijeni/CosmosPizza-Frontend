import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasListComponent } from './pessoas-list.component';

describe('PessoasListComponent', () => {
  let component: PessoasListComponent;
  let fixture: ComponentFixture<PessoasListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoasListComponent]
    });
    fixture = TestBed.createComponent(PessoasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
