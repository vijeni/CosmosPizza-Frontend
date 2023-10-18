import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientesDetailsComponent } from './ingredientes-details.component';

describe('IngredientesDetailsComponent', () => {
  let component: IngredientesDetailsComponent;
  let fixture: ComponentFixture<IngredientesDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngredientesDetailsComponent]
    });
    fixture = TestBed.createComponent(IngredientesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
