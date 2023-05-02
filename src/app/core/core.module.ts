import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './components/button/button.component';
import { IconModule } from './icon/icon.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [ButtonComponent, ToolbarComponent],
  imports: [CommonModule, IconModule],
  exports: [ButtonComponent, IconModule, ToolbarComponent],
})
export class CoreModule {}
