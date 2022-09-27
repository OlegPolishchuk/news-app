export const getTextFromTag = (string: string): string => {
  if (!string) return '';

  return string.replace(/(<(\/?[^>]+)>)/g, '');
};
