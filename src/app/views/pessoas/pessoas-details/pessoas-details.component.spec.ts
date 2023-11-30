import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasDetailsComponent } from './pessoas-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Cliente } from 'src/app/models/cliente/cliente';
import { By } from '@angular/platform-browser';
import { Endereco } from 'src/app/models/endereco/endereco';

describe('PessoasDetailsComponent', () => {
  let component: PessoasDetailsComponent;
  let fixture: ComponentFixture<PessoasDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoasDetailsComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(PessoasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  beforeEach(() => {
    let cliente = new Cliente();
    let endereco = new Endereco();
    cliente.endereco = endereco
    cliente.id= 1
    cliente.cadastro= new Date()
    cliente.edicao= new Date()
    cliente.nome='João'
    cliente.cpf='12345678900'
    cliente.telefone='12345678'
    cliente.endereco.cep="85851010"
    component.pessoa = cliente;
    fixture.detectChanges();
  });
  it('mostrar nome do cliente', async () => {
    let elemento = fixture.debugElement.query(By.css('input[name="inputNome"]'));
    expect(elemento.nativeElement.value).toEqual('');
    elemento.nativeElement.value = 'João'; 
    elemento.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.pessoa.nome).toEqual('João'); 
  });
  it('mostrar telefone do cliente', async () => {
    let elemento = fixture.debugElement.query(By.css('input[name="telefone"]'));
    expect(elemento.nativeElement.value).toEqual('');
    elemento.nativeElement.value = '12345678'; 
    elemento.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.pessoa.telefone).toEqual('12345678'); 
  });
  it('mostrar cpf do cliente', async () => {
    let elemento = fixture.debugElement.query(By.css('input[name="cpf"]'));
    expect(elemento.nativeElement.value).toEqual('');
    elemento.nativeElement.value = '12345678900'; 
    elemento.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.pessoa.cpf).toEqual('12345678900'); 
  });
  it('mostrar cep do cliente', async () => {
    let elemento = fixture.debugElement.query(By.css('input[name="cep"]'));
    expect(elemento.nativeElement.value).toEqual('');
    elemento.nativeElement.value = '85851010'; 
    elemento.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.pessoa.endereco.cep).toEqual('85851010'); 
  });
});
