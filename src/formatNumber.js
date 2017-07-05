export const formatNumber = (n, precision = 2, decimal = ',', thousand = '.') =>
  n
    .toFixed(precision)
    .replace('.', decimal)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${thousand}`);
