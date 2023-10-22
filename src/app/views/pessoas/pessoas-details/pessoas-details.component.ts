import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterModule, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-pessoas-details',
  templateUrl: './pessoas-details.component.html',
  styleUrls: ['./pessoas-details.component.scss'],
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, RouterLink],
  standalone: true,
  
})
export class PessoasDetailsComponent {

}
