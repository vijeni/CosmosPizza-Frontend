import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamanhoDetailsComponent } from './tamanho-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Tamanho } from 'src/app/models/tamanho/tamanho';
import { TamanhoListComponent } from '../tamanho-list/tamanho-list.component';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

describe('TamanhoDetailsComponent', () => {
  let component: TamanhoDetailsComponent;
  let fixture: ComponentFixture<TamanhoDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TamanhoDetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [ActivatedRoute]

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
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Caso de teste 01 
  it('Teste 1 - A mensagem é chamada', () => {
    let elemento = fixture.debugElement.query(By.css('.alert'));
    if(component.isErro){
      expect(elemento).toBeTruthy;
    }
  })
  
});
