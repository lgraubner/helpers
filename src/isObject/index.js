export default o =>
  o != null &&
  typeof o === 'object' &&
  Array.isArray(o) === false &&
  Object.prototype.toString.call(o) === '[object Object]';
