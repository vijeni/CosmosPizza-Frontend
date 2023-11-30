import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { TamanhoDetailsComponent } from './tamanho-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
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
      imports: [HttpClientTestingModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [ActivatedRoute],
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

  //Caso de teste 01
  it('Teste 1 - A mensagem é chamada', () => {
    let elemento = fixture.debugElement.query(By.css('.alert'));
    if (component.isErro) {
      expect(elemento).toBeTruthy;
    }
  });
  it('Chamanda a função Cadastrar', fakeAsync(() => {
    spyOn(component, 'cadastrar');
    let button = fixture.debugElement.query(
      By.css('.btn.btn-success')
    ).nativeElement;
    button.click();
    tick();
    expect(component.cadastrar).toHaveBeenCalled();
  }));

  it('Chamando a função Editar', fakeAsync(() => {
    component.id = '1';
    spyOn(component, 'editar');
    let button = fixture.debugElement.query(
      By.css('.btn.btn-warning')
    ).nativeElement;
    button.click();
    tick();
    expect(component.editar).toHaveBeenCalledWith(1);
  }));
});
