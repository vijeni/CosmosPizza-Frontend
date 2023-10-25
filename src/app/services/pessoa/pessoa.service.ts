import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from 'src/app/models/pessoa/pessoa';
@Injectable({
  providedIn: 'root',
})
export class PessoaService {
    API: string = 'http://localhost:8080/api/pessoa';
    http = inject(HttpClient);
  
    constructor() {}
  
    findById(id: number): Observable<Pessoa> {
      return this.http.get<Pessoa>(`${this.API}/id/${id}`);
    }
    getAll(): Observable<Pessoa[]> {
      return this.http.get<Pessoa[]>(`${this.API}/todos`);
    }
    post(pedido: Pessoa): Observable<Pessoa> {
      return this.http.post<Pessoa>(`${this.API}/cadastrar`, pedido);
    }
    put(id: number, pedido: Pessoa): Observable<Pessoa> {
      return this.http.put<Pessoa>(`${this.API}/editar/${id}`, pedido);
    }
    delete(id: number): Observable<Pessoa> {
      return this.http.delete<Pessoa>(`${this.API}/deletar/${id}`);
    }
}
