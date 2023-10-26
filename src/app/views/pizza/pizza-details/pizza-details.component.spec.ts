import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaDetailsComponent } from './PizzaDetailsComponent';

describe('PizzaDetailsComponent', () => {
  let component: PizzaDetailsComponent;
  let fixture: ComponentFixture<PizzaDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaDetailsComponent],
    });
    fixture = TestBed.createComponent(PizzaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
