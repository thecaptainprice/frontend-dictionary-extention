import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { ButtonComponent } from './components/button/button.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SvgIconComponent } from './icon/component/svg-icon/svg-icon.component';
import { IconModule } from './icon/icon.module';
import { AddWordComponent } from './pages/add-word/add-word.component';
import { FormControlComponent } from './components/form-control/form-control.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ToolbarComponent,
    BottomNavComponent,
    AddWordComponent,
    FormControlComponent,
  ],
  imports: [CommonModule, IconModule, ReactiveFormsModule],
  exports: [
    ButtonComponent,
    IconModule,
    ToolbarComponent,
    BottomNavComponent,
    AddWordComponent,
    SvgIconComponent,
    FormControlComponent,
  ],
})
export class CoreModule {}
