import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingrediente } from 'src/app/models/ingrediente/ingrediente';
import { Sabor } from 'src/app/models/sabor/sabor';
import { SaborService } from 'src/app/services/sabor/sabor.service';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { IngredientesService } from 'src/app/services/ingredientes/ingredientes.service';
@Component({
  selector: 'app-sabor-details',
  templateUrl: './sabor-details.component.html',
  styleUrls: ['./sabor-details.component.scss']
})
export class SaborDetailsComponent implements OnInit {

  sabor= new Sabor(); 
  toppings = new FormControl('');
  ingredientesBanco : Ingrediente[] = [];
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];





  index! : number;
  isErro! : boolean;
  mensagem : string = "";
  service = inject(SaborService);
  serviceIngrediente = inject(IngredientesService);
  injectRouter = inject(Router)
  modoEditar! : boolean;
  id! : string;
  disabled! : boolean;
  sabores : Sabor[] = [];
  
  
  
  constructor(private route: ActivatedRoute){
  
  
  }
  
  ngOnInit(): void {
      this.serviceIngrediente.getAll().subscribe({
        next:async (ingredientes) => {
          this.ingredientesBanco = ingredientes;
        }
      })

      let url = this.injectRouter.url;


      if (!url.includes('novo')) {
        this.id = this.route.snapshot.paramMap.get('id') as string; //pegando a rota
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
        next: async (sabor) => {
          this.sabor = sabor;
          this.mensagem = "Sabor editado com sucesso!" 
          await this.sleep(1000);
          this.injectRouter.navigate(['/web/sabores']);
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
  
  



