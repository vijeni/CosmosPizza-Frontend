import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sabor } from 'src/app/models/sabor/sabor';
@Injectable({
  providedIn: 'root',
})
export class SaborService {
    API: string = 'http://localhost:8080/api/sabor';
    http = inject(HttpClient);
  
    constructor() {}
  
    findById(id: number): Observable<Sabor> {
      return this.http.get<Sabor>(`${this.API}/id/${id}`);
    }
    getAll(): Observable<Sabor[]> {
      return this.http.get<Sabor[]>(`${this.API}/todos`);
    }
    post(sabor: Sabor): Observable<Sabor> {
      return this.http.post<Sabor>(`${this.API}/cadastrar`, sabor);
    }
    put(id: number, pedido: Sabor): Observable<Sabor> {
      return this.http.put<Sabor>(`${this.API}/editar/${id}`, pedido);
    }
    delete(id: number): Observable<any> {
      return this.http.delete<any>(`${this.API}/deletar/${id}`);
    }
}
