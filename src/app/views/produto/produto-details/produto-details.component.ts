import { Component, ViewEncapsulation } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-produto-details',
  templateUrl: './produto-details.component.html',
  styleUrls: ['./produto-details.component.scss'],
  imports: [MatFormFieldModule, MatInputModule],
  standalone: true,
  encapsulation: ViewEncapsulation.None

})
export class ProdutoDetailsComponent {

}
