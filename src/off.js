export const off = (els, type, cb, capture = false) => {
  Array.from(els).forEach(e => {
    e.removeEventListener(type, cb, capture);
  });
};
