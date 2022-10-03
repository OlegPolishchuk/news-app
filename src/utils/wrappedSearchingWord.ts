export const wrappedSearchingWord = (words: string[]): string[] => {
  return words.map(word => `<span class="searchingWord">${word}</span>`);
};
