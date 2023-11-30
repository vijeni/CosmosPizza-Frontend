import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginService } from './login.service';
import { Login } from 'src/app/models/login/login';
import { Usuario } from 'src/app/models/usuario/usuario';

describe('LoginService', () => {
  let service: LoginService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService],
    });

    service = TestBed.inject(LoginService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });



  it('deve realizar o logout', () => {
    spyOn(service, 'removeToken');

    service.logout();

    expect(service.removeToken).toHaveBeenCalled();
  });

  it('deve adicionar um token ao localStorage', () => {
    const mockToken = 'mockToken';

    service.addToken(mockToken);

    expect(localStorage.getItem('token')).toBe(mockToken);
  });

  it('deve remover um token do localStorage', () => {
    localStorage.setItem('token', 'mockToken');

    service.removeToken();

    expect(localStorage.getItem('token')).toBeNull();
  });

  it('deve obter um token do localStorage', () => {
    const mockToken = 'mockToken';
    localStorage.setItem('token', mockToken);

    const token = service.getToken();

    expect(token).toBe(mockToken);
  });

});
