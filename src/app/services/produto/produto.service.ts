import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import Produto from 'src/app/models/produto/produto';
@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
    API: string = 'http://localhost:8080/api/produto';
    http = inject(HttpClient);
  
    constructor() {}
  
    findById(id: number): Observable<Produto> {
      return this.http.get<Produto>(`${this.API}/id/${id}`);
    }
    getAll(): Observable<Produto[]> {
      return this.http.get<Produto[]>(`${this.API}/todos`);
    }
    post(pedido: Produto): Observable<Produto> {
      return this.http.post<Produto>(`${this.API}/cadastrar`, pedido);
    }
    put(id: number, pedido: Produto): Observable<Produto> {
      return this.http.put<Produto>(`${this.API}/editar/${id}`, pedido);
    }
    delete(id: number): Observable<any> {
      return this.http.get<any>(`${this.API}/delete/${id}`);
    }
}
