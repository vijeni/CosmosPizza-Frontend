import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';import { PessoaService } from './cliente.service';
import { Cliente } from 'src/app/models/cliente/cliente';
import { Endereco } from 'src/app/models/endereco/endereco';




describe('clienteservice', () => {
  let service: PessoaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,HttpClientTestingModule]
    });
    service = TestBed.inject(PessoaService);
    providers: [HttpClientTestingModule]
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
//   it('should retrieve a client by ID', () => {
//     const dummyClient: Cliente = {
//       nome: '',
//       cpf: '',
//       telefone: '',
//       endereco: new Endereco(),
//       id: 1,
//       cadastro: new Date(),
//     edicao: new Date(),
//     delecao: new Date(),
//       isAtivo: false
//     };
//     const clientId = 1;

//     service.findById(clientId).subscribe(client => {
//       expect(client).toEqual(dummyClient);
//     });
// });
});
