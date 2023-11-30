import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './usuario.service';
import { Usuario } from 'src/app/models/usuario/usuario';
import { List } from 'ng-bootstrap-icons/icons';

describe('UsuarioService', () => {
  let service: UsuarioService;
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({      imports: [HttpClientModule,HttpClientTestingModule]
});
    service = TestBed.inject(UsuarioService);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {
    // Verifique se não há solicitações pendentes e limpe-as
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('teste findById', () => {
    const userId = 1;
    const mockUsuario: Usuario = new Usuario();

    service.findById(userId).subscribe(user => {
      expect(user).toEqual(mockUsuario);
    });

    const req = httpTestingController.expectOne(`${service.API}/id/${userId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockUsuario);
  });

  it('teste de getAllUsuarios', () => {
    const mockUsuarios = new Array<Usuario>;

    service.getAll().subscribe(users => {
      expect(users).toEqual(mockUsuarios);
    });

    const req = httpTestingController.expectOne(`${service.API}/todos`);
    expect(req.request.method).toBe('GET');
  });
});
