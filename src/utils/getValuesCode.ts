export const getValuesCode = (values: string[], object: object): string[] => {
  return values.map(value => object[value as keyof typeof object]);
};
