import { NgModule } from '@angular/core';

import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { Trash, Pen } from 'ng-bootstrap-icons/icons';

const icons = {
  Pen,
  Trash
};

@NgModule({
  imports: [
    BootstrapIconsModule.pick(icons)
  ],
  exports: [
    BootstrapIconsModule
  ]
})
export class IconsModule { }
