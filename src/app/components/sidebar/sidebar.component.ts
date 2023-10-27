import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  imports: [NgbCollapseModule, MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule, RouterModule // Adicione o RouterModule aos imports do módulo
],
  standalone: true,

  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
	public cozinhaCollapse = false;
  public configuracoesCollapse = false;

  moveTo(){
    window.scrollTo(0, 0);
  }

}
