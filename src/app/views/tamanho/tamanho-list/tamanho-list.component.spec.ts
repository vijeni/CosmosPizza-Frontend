import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { TamanhoListComponent } from './tamanho-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TamanhoService } from 'src/app/services/tamanho/tamanho.service';
import { Router } from '@angular/router';
import { Tamanho } from 'src/app/models/tamanho/tamanho';
import { DecimalPipe } from '@angular/common';
import { of } from 'rxjs';

describe('TamanhoListComponent', () => {
  let component: TamanhoListComponent;
  let fixture: ComponentFixture<TamanhoListComponent>;
  let tamanhoService: TamanhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TamanhoListComponent],
       imports: [HttpClientTestingModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [DecimalPipe]         });
    fixture = TestBed.createComponent(TamanhoListComponent);
    tamanhoService = TestBed.inject(TamanhoService); 
    component = fixture.componentInstance;
    spyOn(tamanhoService, 'getAll').and.returnValue(of([])); // Use 'of' para criar um Observable

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve inicializar os tamanhos.', () => {
    expect(component.tamanhos).toBeTruthy();
    expect(component.tamanho$).toBeTruthy();
  });

  it('Deve chamar o GetAll()', () => {
    expect(tamanhoService.getAll).toHaveBeenCalled();
  });

  it('Navega /web/tamanho/editar/:id quando editar é chamado.', () => {
    const routerSpy = spyOn(TestBed.inject(Router), 'navigate');
    const id = 1;
    component.editar(id);
    expect(routerSpy).toHaveBeenCalledWith(['/web/tamanho/editar', id]);
  });

  it('Navega para /web/tamanho/toggle/:id quando chamado.', () => {
    const routerSpy = spyOn(TestBed.inject(Router), 'navigate');
    const id = 1;
    component.toggle(id);
    expect(routerSpy).toHaveBeenCalledWith(['/web/tamanho/toggle', id]);
  });
});
