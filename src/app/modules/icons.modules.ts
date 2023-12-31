import { NgModule } from '@angular/core';

import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import {
  DoorOpenFill,
  Check,
  SlashCircleFill,
  CheckCircleFill,
  Trash,
  Pen,
  ArrowCounterclockwise,
  Search,
} from 'ng-bootstrap-icons/icons';

const icons = {
  Pen,
  Trash,
  ArrowCounterclockwise,
  Search,
  CheckCircleFill,
  SlashCircleFill,
  Check,
  DoorOpenFill,
};

@NgModule({
  imports: [BootstrapIconsModule.pick(icons)],
  exports: [BootstrapIconsModule],
})
export class IconsModule {}
