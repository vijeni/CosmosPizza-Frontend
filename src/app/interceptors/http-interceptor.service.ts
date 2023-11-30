import { HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, of, throwError } from 'rxjs';
import { LoginService } from '../services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorService {
  router = inject(Router);
  loginService = inject(LoginService);
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token');
    if (token) {
      request = request.clone({
        setHeaders: { Authorization: 'Bearer ' + token, "Access-Control-Allow-Origin": "*" },
      });
    }
    return next.handle(request).pipe(catchError((x) => this.errorHandler(x)));
  }
  private errorHandler(err: HttpErrorResponse): Observable<any> {
    console.log(err)
    if (err.statusText==="Unknown Error") {
      this.loginService.logout()
      this.router.navigateByUrl(`/login`);
      return of(err.message);
    }
    return throwError(() => err);
  }
}
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpinterceptorService, multi: true },
];