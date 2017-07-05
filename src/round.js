export const round = (n, precision = 2) =>
  Math.round(n * 10 ** precision) / 10 ** precision;
