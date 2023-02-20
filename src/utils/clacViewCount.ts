const MAX_COUNT = 999;

export const clacCountView = (count: number) => {
  if (count > MAX_COUNT) {
    return MAX_COUNT;
  }

  return count;
};
