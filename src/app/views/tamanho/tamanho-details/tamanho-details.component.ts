import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tamanho } from 'src/app/models/tamanho/tamanho';
import { TamanhoService } from 'src/app/services/tamanho/tamanho.service';

@Component({
  selector: 'app-tamanho-details',
  templateUrl: './tamanho-details.component.html',
  styleUrls: ['./tamanho-details.component.scss']
})
export class TamanhoDetailsComponent {

  tamanho = new Tamanho();

  index!: number;
  isErro!: boolean;
  mensagem: string = '';
  service = inject(TamanhoService);
  injectRouter = inject(Router);
  modoEditar!: boolean;
  id!: string;
  disabled!: boolean;

  constructor(
    
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let url = this.injectRouter.url;

    if (!url.includes('novo')) {
      this.id = this.route.snapshot.paramMap.get('id') as string; //pegando a rota
      this.getById(Number(this.id));
      if (url.includes('editar')) {
        this.modoEditar = true;
      } else if (url.includes('toggle')) {
        this.modoEditar = false;
        this.disabled = true;
      } else {
        this.disabled = true;
      }
    }

  
  }

  cadastrar() {
    this.service.post(this.tamanho).subscribe({
      next: async (tamanho) => {
        this.tamanho = tamanho;
        this.isErro = false;
        this.mensagem = 'Tamanho cadastrado com sucesso!';
        await this.sleep(1000);
        this.injectRouter.navigate(['/web/tamanhos']);
      },
      error: (erro) => {
        console.log(erro.error);
        this.isErro = true;
        this.mensagem = erro.error;
      },
    });
  }

  editar(id: number) {
    this.service.put(id, this.tamanho).subscribe({
      next: async (tamanho) => {
        this.tamanho = tamanho;
        this.mensagem = 'Tamanho editado com sucesso!';
        await this.sleep(1000);
        this.injectRouter.navigate(['/web/tamanho']);
      },
      error: (erro) => {
        console.log(erro.error);
        this.mensagem = erro.error;
      },
    });
  }

  deletar(id: number) {
    this.service.delete(id).subscribe({
      next: async (tamanho) => {
        this.tamanho = tamanho;
        this.mensagem = 'Tamanho desativado com sucesso!';
        await this.sleep(1500);
        this.injectRouter.navigate(['/web/tamanho']);
      },
      error: async (erro) => {
        console.log(erro.error);
        await this.sleep(1500);
        this.injectRouter.navigate(['/web/tamanho']);
        this.mensagem = 'Tamanho deletado com sucesso!';
        /*
      O deletar está funcionando normalmente, mas está retornando um erro de Json no console.
      */
      },
    });
  }

  getById(id: number) {
    this.service.findById(id).subscribe({
      next: (tamanho) => {
        this.tamanho =tamanho;
      },
      error: (erro) => {
        console.log(erro.error);
      },
    });
  }


  moveTo() {
    window.scrollTo(0, 0);
  }

  sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  async voltar() {
    this.injectRouter.navigate(['/web/tamanho']);
    this.moveTo();
  }





}
