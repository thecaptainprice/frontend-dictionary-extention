import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './components/button/button.component';
import { IconModule } from './icon/icon.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ToolbarComponent,
    BottomNavComponent,
    AboutComponent,
  ],
  imports: [CommonModule, IconModule],
  exports: [
    ButtonComponent,
    IconModule,
    ToolbarComponent,
    BottomNavComponent,
    AboutComponent,
  ],
})
export class CoreModule {}
