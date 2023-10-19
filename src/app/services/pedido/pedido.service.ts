import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from 'src/app/models/pedido/pedido';
@Injectable({
  providedIn: 'root',
})
export class PedidoService {
    API: string = 'http://localhost:8080/api/pedido';
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
    delete(id: number): Observable<any> {
      return this.http.get<any>(`${this.API}/delete/${id}`);
    }
}
