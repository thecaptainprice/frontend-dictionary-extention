import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'i-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @HostBinding('attr.disabled')
  @Input()
  disabled: boolean = false;
  @Input() noFocus: boolean = false;
  @Input() spinner: boolean = false;

  constructor(private el: ElementRef<HTMLElement>) {}

  @HostBinding('attr.role')
  public get role() {
    return 'button';
  }

  @HostBinding('attr.spinning')
  public get spinning() {
    return this.spinner;
  }

  @HostBinding('attr.tabindex')
  public get tabIndex() {
    if (this.noFocus) return null;

    return this.disabled ? null : 0;
  }

  @HostListener('keyup.enter')
  onEnter() {
    this.el.nativeElement.click();
  }

  @HostListener('click')
  onClick() {
    if (this.spinner) return;
  }
}
