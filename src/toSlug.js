export const toSlug = s =>
  s
    .toString()
    .toLowerCase()
    .trim()
    .replace(/ä/g, 'ae') // replace umlauts
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/\s+/g, '-') // replace whitespace
    .replace(/[^\w-]+/g, '') // remove non-word chars
    .replace(/--+/g, '-'); // replace multiple dashes
