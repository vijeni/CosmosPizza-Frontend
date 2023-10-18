import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamanhoDetailsComponent } from './tamanho-details.component';

describe('TamanhoDetailsComponent', () => {
  let component: TamanhoDetailsComponent;
  let fixture: ComponentFixture<TamanhoDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TamanhoDetailsComponent]
    });
    fixture = TestBed.createComponent(TamanhoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
