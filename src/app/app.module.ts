import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './core/index/index.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PessoaComponent } from './services/pessoa/pessoa/pessoa.component';
import { ProdutoComponent } from './services/produto/produto/produto.component';
import { PessoaServiceComponent } from './services/pessoa/pessoa.service/pessoa.service.component';
import { ProdutoServiceComponent } from './services/produto/produto.service/produto.service.component';
import { PessoasListComponent } from './views/pessoas/pessoas-list/pessoas-list.component';
import { PessoasDetailsComponent } from './views/pessoas/pessoas-details/pessoas-details.component';
import { IngredienteListComponent } from './views/ingredientes/ingrediente-list/ingrediente-list.component';
import { IngredientesDetailsComponent } from './views/ingredientes/ingredientes-details/ingredientes-details.component';
import { PedidosListComponent } from './views/pedidos/pedidos-list/pedidos-list.component';
import { PedidosDetailsComponent } from './views/pedidos/pedidos-details/pedidos-details.component';
import { PizzaListComponent } from './views/pizza/pizza-list/pizza-list.component';
import { PizzaDetailsComponent } from './views/pizza/pizza-details/pizza-details.component';
import { ProdutoListComponent } from './views/produto/produto-list/produto-list.component';
import { ProdutoDetailsComponent } from './views/produto/produto-details/produto-details.component';
import { SaborListaComponent } from './views/sabor/sabor-lista/sabor-lista.component';
import { SaborDetailsComponent } from './views/sabor/sabor-details/sabor-details.component';
import { TamanhoListComponent } from './views/tamanho/tamanho-list/tamanho-list.component';
import { TamanhoDetailsComponent } from './views/tamanho/tamanho-details/tamanho-details.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SidebarComponent,
    PessoaComponent,
    ProdutoComponent,
    PessoaServiceComponent,
    ProdutoServiceComponent,
    PessoasListComponent,
    PessoasDetailsComponent,
    IngredienteListComponent,
    IngredientesDetailsComponent,
    PedidosListComponent,
    PedidosDetailsComponent,
    PizzaListComponent,
    PizzaDetailsComponent,
    ProdutoListComponent,
    ProdutoDetailsComponent,
    SaborListaComponent,
    SaborDetailsComponent,
    TamanhoListComponent,
    TamanhoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
