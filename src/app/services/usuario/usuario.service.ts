import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  API: string = `${environment.apirUrl}/api/usuario`;
  http = inject(HttpClient);

  constructor() {}

  findById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.API}/id/${id}`);
  }
  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.API}/todos`);
  }
  getAllAdm(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.API}/todos/admin`);
  }
  getAllFuncionarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.API}/todos/funcionarios`);
  }
  post(pedido: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.API}/cadastrar`, pedido);
  }
  put(id: number, pedido: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.API}/editar/${id}`, pedido);
  }
  delete(id: number): Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.API}/desativar/${id}`);
  }
  ativar(id: number): Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.API}/ativar/${id}`);
  }
}
