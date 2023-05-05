import {
  Component,
  Input,
  ViewEncapsulation,
  HostListener,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { getErrorMessage } from '../../utils/error';

@Component({
  selector: 'form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class FormControlComponent {
  @Input() control?: FormControl;
  @Input() name = '';
  @Input() target = '';

  get error() {
    return getErrorMessage(this.control?.errors);
  }
}
