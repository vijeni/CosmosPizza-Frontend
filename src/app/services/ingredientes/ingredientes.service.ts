import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingrediente } from 'src/app/models/ingrediente/ingrediente';

@Injectable({
  providedIn: 'root',
})
export class IngredientesService {
  API: string = 'http://localhost:8080/api/ingrediente';
  http = inject(HttpClient);

  constructor() {}

  findById(id: number): Observable<Ingrediente> {
    return this.http.get<Ingrediente>(`${this.API}/id/${id}`);
  }
  getAll(): Observable<Ingrediente[]> {
    return this.http.get<Ingrediente[]>(`${this.API}/todos`);
  }
  post(ingrediente: Ingrediente): Observable<Ingrediente> {
    return this.http.post<Ingrediente>(`${this.API}/cadastrar`, ingrediente);
  }
  put(id: number, ingrediente: Ingrediente): Observable<Ingrediente> {
    return this.http.put<Ingrediente>(`${this.API}/editar/${id}`, ingrediente);
  }
  desativar(id: number): Observable<Ingrediente> {
    return this.http.delete<Ingrediente>(`${this.API}/desativar/${id}`);
  }
  ativar(id: number): Observable<Ingrediente> {
    return this.http.put<Ingrediente>(`${this.API}/ativar/${id}`, null);
  }
}
