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

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SidebarComponent,
    PessoaComponent,
    ProdutoComponent,
    PessoaServiceComponent,
    ProdutoServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
