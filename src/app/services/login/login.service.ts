import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario/usuario';
import { Login } from 'src/app/models/login/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  API: string = 'http://localhost:8080/api/login';
  http = inject(HttpClient);

  constructor(){}

  login(login: Login): Observable<Usuario>{
    return this.http.post<Usuario>(`${this.API}`, login);
  }

  
}

export { Login };
