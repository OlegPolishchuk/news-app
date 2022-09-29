/* 2022-09-29 04:51:28 +0000 => +0000 = -5 */
const last_index = -5;

export const dateStringSlicer = (date: string): string => {
  if (!date) return '';

  return date.slice(0, last_index);
};
