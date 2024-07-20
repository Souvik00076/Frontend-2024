let timer: NodeJS.Timeout | undefined;
export const debounce = (arg: () => void) => {
  if (timer !== undefined) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    arg();
  }, 300) as NodeJS.Timeout;
};
