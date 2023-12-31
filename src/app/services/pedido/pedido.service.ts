import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from 'src/app/models/pedido/pedido';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class PedidoService {
    API: string = `${environment.apirUrl}/api/pedido`;
    http = inject(HttpClient);
  
    constructor() {}
  
    findById(id: number): Observable<Pedido> {
      return this.http.get<Pedido>(`${this.API}/id/${id}`);
    }
    getAll(): Observable<Pedido[]> {
      return this.http.get<Pedido[]>(`${this.API}/todos`);
    }
    post(pedido: Pedido): Observable<Pedido> {
      return this.http.post<Pedido>(`${this.API}/cadastrar`, pedido);
    }
    put(id: number, pedido: Pedido): Observable<Pedido> {
      return this.http.put<Pedido>(`${this.API}/editar/${id}`, pedido);
    }
    finalizarPedido(id: number): Observable<Pedido> {
      return this.http.put<Pedido>(`${this.API}/finalizar/${id}`, null);
    }
    cancelar(id: number): Observable<any> {
      return this.http.delete<any>(`${this.API}/cancelar/${id}`);
    }
    reabrir(id: number): Observable<any> {
      return this.http.put<any>(`${this.API}/reabrir/${id}`, null);
    }
}
