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
  public baseURL = `${environment.apirUrl}/auth`;
  http = inject(HttpClient);
  constructor() {}
  login(login: Login): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseURL, login);
  }

  logout(): any {
    this.removeToken();
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
  isAdmin() {
    let token = this.jwtDecode() as any;
    let roles = token.realm_access.roles;
    let hasRole = false;
    roles.forEach((r: string) => {
      if (r === 'ADMIN') hasRole = true;
    });
    console.log("admin? " + hasRole)
    return hasRole;
  }
}

export { Login };
