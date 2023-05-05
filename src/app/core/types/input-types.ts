export const inputTypes = {
  date: 'date',
  email: 'email',
  file: 'file',
  number: 'number',
  password: 'password',
  tel: 'tel',
  normal: 'normal',
};
export type inputBoxType = keyof typeof inputTypes;
