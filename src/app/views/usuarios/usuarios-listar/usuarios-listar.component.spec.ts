import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosListarComponent } from './usuarios-listar.component';

describe('UsuariosListarComponent', () => {
  let component: UsuariosListarComponent;
  let fixture: ComponentFixture<UsuariosListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariosListarComponent]
    });
    fixture = TestBed.createComponent(UsuariosListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
