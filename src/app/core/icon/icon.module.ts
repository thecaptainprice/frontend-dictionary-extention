import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from './component/svg-icon/svg-icon.component';
import { iconPack } from './type/icon';

@NgModule({
  declarations: [SvgIconComponent],
  imports: [CommonModule],
  exports: [SvgIconComponent],
})
export class IconModule {}
