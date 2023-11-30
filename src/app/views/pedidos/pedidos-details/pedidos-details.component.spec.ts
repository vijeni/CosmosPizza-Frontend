import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosDetailsComponent } from './pedidos-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('PedidosDetailsComponent', () => {
  let component: PedidosDetailsComponent;
  let fixture: ComponentFixture<PedidosDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidosDetailsComponent],
       imports: [HttpClientTestingModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],         });
    fixture = TestBed.createComponent(PedidosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Interpolação pedido.cliente', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="cliente"]'));
    expect(elemento.nativeElement.value).toBe.toString;
  });

  it('Interpolação funcionario.username', () =>{
    let elemento = fixture.debugElement.query(By.css('input[name="funcionario"]'));
    expect(elemento.nativeElement.value).toBe.toString;
  })
});
