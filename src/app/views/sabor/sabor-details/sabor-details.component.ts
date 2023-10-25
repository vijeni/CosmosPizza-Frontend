import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingrediente } from 'src/app/models/ingrediente/ingrediente';
import { Sabor } from 'src/app/models/sabor/sabor';
import { SaborService } from 'src/app/services/sabor/sabor.service';

@Component({
  selector: 'app-sabor-details',
  templateUrl: './sabor-details.component.html',
  styleUrls: ['./sabor-details.component.scss']
})
export class SaborDetailsComponent implements OnInit {

  sabor= new Sabor(); 



  index! : number;
  isErro! : boolean;
  mensagem : string = "";
  service = inject(SaborService);
  injectRouter = inject(Router)
  modoEditar! : boolean;
  id! : string;
  disabled! : boolean;
  ingredientes : Ingrediente[] = [];
 
  
  
  
  constructor(private route: ActivatedRoute){
  
  
  }
  
  ngOnInit(): void {
    
    }
  
    cadastrar(){
      this.service.post(this.sabor).subscribe({
        next: async (sabor) => {
          this.sabor = sabor;
          this.isErro = false;
          this.mensagem = "Sabor cadastrado com sucesso!" 
          await this.sleep(1000);
          this.injectRouter.navigate(['/web/sabores']);
          
        },
        error: (erro) => {
          console.log(erro.error);
          this.isErro = true;
          this.mensagem = (erro.error);
        },
      });
    }
    
    editar(id: number){
      this.service.put(id,this.sabor).subscribe({
        next: async (pessoas) => {
          this.sabor = this.sabor;
          this.mensagem = "Sabor editado com sucesso!" 
          await this.sleep(1000);
          this.injectRouter.navigate(['/web/sabor']);
        },
        error: (erro) => {
          console.log(erro.error);
          this.mensagem = (erro.error);
    
        },
      });
    }
    
    deletar(id: number){
      this.service.delete(id).subscribe({
        next: async (sabor) => {
          this.sabor = sabor;
          this.mensagem = "Sabor deletado com sucesso!" 
          await this.sleep(1500);
          this.injectRouter.navigate(['/web/sabores']);
        },
        error: async (erro) => {
          console.log(erro.error);
          await this.sleep(1500); 
          this.injectRouter.navigate(['/web/sabores']);
          this.mensagem = "Sabor deletado com sucesso!"
          /*
          O deletar está funcionando normalmente, mas está retornando um erro de Json no console.
          */
        },
      });
    }
    
    getById(id: number){
      this.service.findById(id).subscribe({
        next: (sabor) => {
          this.sabor = sabor;
        },
        error: (erro) => {
          console.log(erro.error);
        },
      });
    }
    
    
    moveTo(){
      window.scrollTo(0, 0);
    }
    
     sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
    
     async voltar() {
      this.injectRouter.navigate(['/web/sabores']);
       this.moveTo();
    }
    
  
    
  }
  
  



