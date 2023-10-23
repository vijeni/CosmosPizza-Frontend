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
    post(produto: Produto): Observable<Produto> {
      return this.http.post<Produto>(`${this.API}/cadastrar`, produto);
    }
    put(id: number, produto: Produto): Observable<Produto> {
      return this.http.put<Produto>(`${this.API}/editar/${id}`, produto);
    }
    delete(id: number): Observable<Produto> {
      return this.http.delete<Produto>(`${this.API}/desativar/${id}`);
    }
}
