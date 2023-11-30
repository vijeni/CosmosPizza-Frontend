import { DecimalPipe } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
  PipeTransform,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, RouterModule, RouterLink } from '@angular/router';
import { map, startWith } from 'rxjs';
import { Usuario } from 'src/app/models/usuario/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-usuarios-listar',
  templateUrl: './usuarios-listar.component.html',
  styleUrls: ['./usuarios-listar.component.scss']
})
export class UsuariosListarComponent implements OnInit{
  // comm de modal
  @Output() usuarioSelecionada = new EventEmitter<Usuario>();
  @Input() isModal: boolean = false;
  @Input() isUsuarioModal: boolean = true;

  //usuarios
  usuarios: Usuario[] = [];
  usuarios$: Usuario[] = [];
  usuario = new Usuario();
  index!: number;

  // services e pipes
  service = inject(UsuarioService);
  router = inject(Router);
  decimalPipe = inject(DecimalPipe);

  // form controls de filtros
  filter = new FormControl('');
  switchEstado = new FormControl(false);

  // controle
  isFuncionario!: boolean;
  isErro!: boolean;
  mensagem: string = '';

  constructor() {}

  async ngOnInit() {
    this.switchEstado.setValue(true);
    this.isFuncionario = false;
    await this.getAllUsuarios();
    setTimeout(() => {
      this.filter.valueChanges
        .pipe(
          startWith(''),
          map((text) => this.search(text as string, this.decimalPipe))
        )
        .subscribe({
          next: (usuariosFiltradas) => {
            this.usuarios$ = usuariosFiltradas;
          },
        });
    }, 1000);
  }
  search(text: string, pipe: PipeTransform): Usuario[] {
    return this.usuarios.filter((usuario) => {
      const term = text.toLowerCase();
      return (
        (usuario.username.toLowerCase().includes(term) ||
          usuario.cpf.toLowerCase().includes(term) ||
          usuario.role.toString().toLowerCase().includes(term) ||
          pipe.transform(usuario.id).includes(term)) &&
        (!this.switchEstado.value ||
          (usuario.delecao === null && this.switchEstado.value))
      );
    });
  }

  async getAll() {
    this.service.getAll().subscribe({
      next: (usuarios) => {
        this.usuarios = usuarios;
      },
      error: (erro) => {
        console.log(erro.error);
      },
    });
  }
  async getAllUsuarios() {
    this.service.getAll().subscribe({
      next: (usuarios) => {
        this.usuarios = usuarios;
      },
      error: (erro) => {
        console.log(erro.error);
      },
    });
  }

  editar(id: number) {
    this.router.navigate(['/web/usuario/editar', id]);
  }

  toggle(id: number) {
    this.router.navigate(['/web/usuario/toggle', id]);
  }
  filtrarEstado() {
    this.filter.setValue(this.filter.value);
  }
  selecionar(usuario: Usuario) {
    if (this.isModal) {
      this.usuarioSelecionada.emit(usuario);
    } else {
      this.router.navigate(['/web/Usuario/', usuario.id]);
    }
  }
}
