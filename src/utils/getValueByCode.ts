export const getValueByCode = (code: string, object: object): string => {
  const values = Object.values(object);
  const keys = Object.keys(object);
  const index = values.indexOf(code);

  return keys[index];
};
