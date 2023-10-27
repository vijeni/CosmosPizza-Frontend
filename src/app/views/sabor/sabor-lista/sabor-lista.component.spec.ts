import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaborListaComponent } from './sabor-lista.component';

describe('SaborListaComponent', () => {
  let component: SaborListaComponent;
  let fixture: ComponentFixture<SaborListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaborListaComponent]
    });
    fixture = TestBed.createComponent(SaborListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
