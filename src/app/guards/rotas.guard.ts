import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';

export const rotasGuard: CanActivateFn = (route, state) => {
  let loginService = inject(LoginService);
  let router = inject(Router);
  let rota = route.url.toString();
  let token = loginService.getToken();
  let needsAdmin = route.data['isAdmin'];
  console.log(rota)
  if (rota === 'login') {
    if (token != null) {router.navigate(['/web']); console.log("logado")}
    return true;
  } else if (rota === 'logout') {
    loginService.logout();
    router.navigate(['']);
    return true;
  } else {
    if (token === null) {
      if(rota==="erro"){
        return true;
      }else{
        router.navigate(['/login']);
        return true;
      }
    }else{
      if(loginService.isAdmin() || needsAdmin == false){
        return true
      }else{
        alert("Acesso negado!")
        return false
      }
    }
  } 
};
