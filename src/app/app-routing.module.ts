import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './core/index/index.component';
import { PedidosListComponent } from './views/pedidos/pedidos-list/pedidos-list.component';
import { PedidosDetailsComponent } from './views/pedidos/pedidos-details/pedidos-details.component';

const routes: Routes = [
  {path: "",  redirectTo: "web", pathMatch: "full"},
  {path: "web",  component: IndexComponent, children: [
    {path: "pedidos", component: PedidosListComponent},
    {path: "pedido", component: PedidosDetailsComponent, children:[
      {path: ":id", component: PedidosDetailsComponent},
      {path: "novo", component: PedidosDetailsComponent},
      {path: "editar/:id", component: PedidosDetailsComponent},
      {path: "cancelar/:id", component: PedidosDetailsComponent}
    ]}
  ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
