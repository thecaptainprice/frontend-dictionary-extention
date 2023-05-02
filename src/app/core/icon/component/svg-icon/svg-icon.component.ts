import {
  Component,
  Input,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IconName, iconPack } from '../../type/icon';

@Component({
  selector: 'svg-icon',
  template: '<i [innerHTML]="_svg"></i>',
  styleUrls: ['./svg-icon.component.sass'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconComponent {
  @Input()
  set name(name: IconName | null | undefined) {
    if (name)
      this._svg = this.sanitizer.bypassSecurityTrustHtml(iconPack[name]);
  }

  _svg: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {}
}
