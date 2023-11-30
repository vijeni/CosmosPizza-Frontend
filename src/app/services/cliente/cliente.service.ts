import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/models/cliente/cliente';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  API: string = `${environment.apirUrl}/api/cliente`;
  http = inject(HttpClient);

  constructor() {}

  findById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.API}/id/${id}`);
  }
  getAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.API}/todos`);
  }
  post(pedido: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.API}/cadastrar`, pedido);
  }
  put(id: number, pedido: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.API}/editar/${id}`, pedido);
  }
  delete(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.API}/desativar/${id}`);
  }
  ativar(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.API}/ativar/${id}`);
  }
}
