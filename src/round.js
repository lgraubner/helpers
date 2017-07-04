export default (n, precision = 2) =>
  Math.round(n * Math.pow(10, precision)) / Math.pow(10, precision);
