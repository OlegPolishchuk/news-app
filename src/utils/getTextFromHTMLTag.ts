export const getTextFromHTMLTag = (string: string): string => {
  if (!string) return '';

  return string.replace(/(<(\/?[^>]+)>)/g, '');
};
