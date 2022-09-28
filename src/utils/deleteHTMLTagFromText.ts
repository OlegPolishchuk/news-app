export const deleteHTMLTagFromText = (string: string): string => {
  if (!string) return '';

  const result = string.replace(/(<(\/?[^>]+)>)/g, '');
  const tagIndex = result.indexOf('<');

  return result.slice(0, tagIndex);
};
