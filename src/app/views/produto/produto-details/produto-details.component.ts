import { Component, ViewEncapsulation, inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {Router, RouterEvent, RouterModule } from '@angular/router';

@Component({
  selector: 'app-produto-details',
  templateUrl: './produto-details.component.html',
  styleUrls: ['./produto-details.component.scss'],
  imports: [MatFormFieldModule, MatInputModule],
  standalone: true,
  encapsulation: ViewEncapsulation.None

})
export class ProdutoDetailsComponent {

  router = inject(Router)
  constructor(){}  

  voltar(){
    this.router.navigate(["/web/produtos"])
  }
}
