export const wrapWordInHTML = (
  string: string,
  regExp: RegExp,
  className: string,
): string => {
  return string
    .split(' ')
    .map(word => {
      if (regExp.test(word)) {
        return `<span className=${className}>${word}</span>`;
      }

      return word;
    })
    .join(' ');
};
