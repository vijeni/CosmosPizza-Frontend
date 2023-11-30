import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import Produto from 'src/app/models/produto/produto';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  API: string = `${environment.apirUrl}/api/produto`;
    http = inject(HttpClient);
  
    constructor() {}
  
    findById(id: number): Observable<Produto> {
      return this.http.get<Produto>(`${this.API}/id/${id}`);
    }
    getAll(): Observable<Produto[]> {
      return this.http.get<Produto[]>(`${this.API}/todos`);
    }
    getAllAtivos(): Observable<Produto[]> {
      return this.http.get<Produto[]>(`${this.API}/todos/ativos`);
    }
    post(produto: Produto): Observable<Produto> {
      return this.http.post<Produto>(`${this.API}/cadastrar`, produto);
    }
    put(id: number, produto: Produto): Observable<Produto> {
      return this.http.put<Produto>(`${this.API}/editar/${id}`, produto);
    }
    desativar(id: number): Observable<Produto> {
      return this.http.delete<Produto>(`${this.API}/desativar/${id}`);
    }
    ativar(id: number): Observable<Produto> {
      return this.http.put<Produto>(`${this.API}/ativar/${id}`, null);
    }
}
