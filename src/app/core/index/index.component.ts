import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  // encapsulation: ViewEncapsulation.None,
})
export class IndexComponent {
  // @ViewChild('mainContent')
  // private mainContentDiv!: ElementRef<HTMLElement>;

  // constructor(private readonly router: Router) {}

  // /**
  //   Whenever a new route is activated
  //   @param _event
  // */
  // onActivate(_event: any): void {
  //   window.scroll({
  //     top: 0,
  //     left: 0,
  //     behavior: 'smooth',
  //   });
  // }
}
