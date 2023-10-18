import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './core/index/index.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PedidosListComponent } from './views/pedidos/pedidos-list/pedidos-list.component';
import { PedidosDetailsComponent } from './views/pedidos/pedidos-details/pedidos-details.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SidebarComponent,
    PedidosListComponent,
    PedidosDetailsComponent
  ],
  imports: [    
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
