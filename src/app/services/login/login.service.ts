import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/login/login';
import { Usuario } from 'src/app/models/usuario/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseURL = `${environment.apirUrl}/auth`;
  http = inject(HttpClient);
  constructor() {}
  login(login: Login): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseURL, login);
  }

  logout(): Observable<any> {
    this.removeToken();
    return this.http.get<any>(this.baseURL + '/logout');
  }
  addToken(token: string) {
    localStorage.setItem('token', token);
  }
  removeToken() {
    localStorage.removeItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  jwtDecode() {
    let token = this.getToken();
    if (token) {
      return jwtDecode<JwtPayload>(token);
    }
    return '';
  }
  hasPermission(role: string) {
    if(role==="*"){
      return true
    }else{
      let token = this.jwtDecode() as any;
      let roles = token.realm_access.roles;
      let hasRole = false
      roles.forEach((r: string) => {
        if (role === r) hasRole = true;
        if (r==="ADMINISTRADOR") hasRole = true
      });
      return hasRole;
    }
  }
}