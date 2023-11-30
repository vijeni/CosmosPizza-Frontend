import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { TamanhoDetailsComponent } from './tamanho-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { Tamanho } from 'src/app/models/tamanho/tamanho';
import { TamanhoListComponent } from '../tamanho-list/tamanho-list.component';
import { By } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';

describe('TamanhoDetailsComponent', () => {
  let component: TamanhoDetailsComponent;
  let fixture: ComponentFixture<TamanhoDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TamanhoDetailsComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA], 
    });
    fixture = TestBed.createComponent(TamanhoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    let tamanho = new Tamanho();
    tamanho.id = 1;
    tamanho.nome = 'Grande';
    tamanho.valor = 10;
    let mensagem: string = 'mensagem de erro';
    component.mensagem = mensagem;
    component.isErro = true;
    component.id = '1';
    fixture.detectChanges();
  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
