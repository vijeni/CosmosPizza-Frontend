import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tamanho } from 'src/app/models/tamanho/tamanho';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class TamanhoService {
  API: string = `${environment.apirUrl}/api/tamanho`;
  http = inject(HttpClient);

  constructor() {}

  findById(id: number): Observable<Tamanho> {
    return this.http.get<Tamanho>(`${this.API}/id/${id}`);
  }
  getAll(): Observable<Tamanho[]> {
    return this.http.get<Tamanho[]>(`${this.API}/todos`);
  }
  post(tamanho: Tamanho): Observable<Tamanho> {
    return this.http.post<Tamanho>(`${this.API}/cadastrar`, tamanho);
  }
  put(id: number, tamanho: Tamanho): Observable<Tamanho> {
    return this.http.put<Tamanho>(`${this.API}/editar/${id}`, tamanho);
  }
  delete(id: number): Observable<Tamanho> {
    return this.http.delete<Tamanho>(`${this.API}/desativar/${id}`);
  }
  ativar(id: number): Observable<Tamanho> {
    return this.http.delete<Tamanho>(`${this.API}/ativar/${id}`);
  }
}
