import { ValidationErrors } from '@angular/forms';
import { replaceInTemplate } from './template';

const messages: Record<string, string> = {
  required: `This field is required!`,
  minlength: `This field should be more than $requiredLength characters!`,
  email: `Email is not valid!`,
};

export function getErrorMessage(errors: ValidationErrors | null | undefined) {
  if (!errors) return '';

  const error = Object.keys(errors)[0];
  const parameters = errors[error];

  return replaceInTemplate(messages[error], parameters);
}
