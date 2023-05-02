import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './components/button/button.component';
import { SvgIconComponent } from './icon/component/svg-icon/svg-icon.component';
import { IconModule } from './icon/icon.module';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, IconModule],
  exports: [ButtonComponent, IconModule],
})
export class CoreModule {}
