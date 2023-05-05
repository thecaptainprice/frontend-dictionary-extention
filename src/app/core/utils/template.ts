export function replaceInTemplate(
  template: string,
  parameters: Record<string, string | number>
) {
  Object.keys(parameters).forEach((parameter) => {
    template = template.replace(`$${parameter}`, String(parameters[parameter]));
  });

  return template;
}
