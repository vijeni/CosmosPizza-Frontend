import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamanhoListComponent } from './tamanho-list.component';

describe('TamanhoListComponent', () => {
  let component: TamanhoListComponent;
  let fixture: ComponentFixture<TamanhoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TamanhoListComponent]
    });
    fixture = TestBed.createComponent(TamanhoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
