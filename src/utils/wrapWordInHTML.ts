export const wrapWordInHTML = (
  string: string,
  regExps: RegExp[],
  className: string,
): string => {
  return string
    .split(' ')
    .map(word => {
      let result = word;

      regExps.forEach(regExp => {
        if (regExp.test(word)) {
          result = `<span className=${className}>${word}</span>`;
        }
      });

      return result;
    })
    .join(' ');
};
