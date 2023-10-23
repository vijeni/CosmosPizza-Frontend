import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './core/index/index.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsModule } from './modules/icons.modules';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PessoasListComponent,
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
    TamanhoDetailsComponent,
    PedidosListComponent,
    PedidosDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SidebarComponent,
    BrowserAnimationsModule,
    PessoasDetailsComponent,
    IconsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
