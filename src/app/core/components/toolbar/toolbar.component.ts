import { Component } from '@angular/core';

declare namespace chrome {}

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass'],
})
export class ToolbarComponent {
  closeExtension() {
    // @ts-ignore
    window.chrome.runtime.sendMessage({
      message: 'closeExtension',
    });
  }
}
