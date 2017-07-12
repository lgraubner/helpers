export default (els, type, cb, capture = false) => {
  Array.from(els).forEach(e => {
    e.addEventListener(type, cb, capture);
  });
};
