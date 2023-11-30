import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login/login';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login = new Login();
  password!: string;
  show = false;
  service = inject(LoginService);
  router = inject(Router)
  mensagem!: string
  constructor() {
    this.password = 'password';
  }
  showPassword() {
    this.show = !this.show;
    this.show ? (this.password = 'text') : (this.password = 'password');
  }
  doLogin() {
    this.service.login(this.login).subscribe({
      next: (user) => {
        this.service.addToken(user.token);
        this.router.navigate(['/web']);
      },
      error: (erro: any) => {
        console.log(erro)
        this.mensagem = erro.error
      },
    });
  }
}