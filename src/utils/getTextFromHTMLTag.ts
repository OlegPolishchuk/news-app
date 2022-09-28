export const getTextFromHTMLTag = (string: string): string => {
  if (!string) return '';

  console.log(string.replace(/(<(\/?[^>]+)>)/g, ''));

  return string.replace(/(<(\/?[^>]+)>)/g, '');
};
