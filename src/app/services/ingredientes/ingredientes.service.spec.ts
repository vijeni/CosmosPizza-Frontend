import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';import { IngredientesService } from './ingredientes.service';


describe('ingrediente', () => {
  let service: IngredientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({      imports: [HttpClientModule,HttpClientTestingModule]
});
    service = TestBed.inject(IngredientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
