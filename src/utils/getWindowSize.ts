export const getWindowSize = (): { innerHeight: number; innerWidth: number } => {
  const { innerHeight, innerWidth } = window;

  return { innerHeight, innerWidth };
};
