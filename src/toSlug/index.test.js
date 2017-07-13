import toSlug from './';

test('should export a function', () => {
  expect(toSlug).toBeInstanceOf(Function);
});

test('should lowercase all characters', () => {
  const str = 'ABC';

  expect(toSlug(str)).toBe('abc');
});

test('should trim string', () => {
  const str = ' abc   ';

  expect(toSlug(str)).toBe('abc');
});

test('should replace umlauts', () => {
  const str = 'äöüß';

  expect(toSlug(str)).toBe('aeoeuess');
});

test('should replace whitespace characters', () => {
  const str = 'i like monkeys';

  expect(toSlug(str)).toBe('i-like-monkeys');
});

test('should remove non-word characters', () => {
  const str = 'hello!';

  expect(toSlug(str)).toBe('hello');
});

test('should replace multiple dashes with one', () => {
  const str = 'hello--world';

  expect(toSlug(str)).toBe('hello-world');
});

test('should apply all transformations', () => {
  const str = ' Österreich- ist toll!  ';

  expect(toSlug(str)).toBe('oesterreich-ist-toll');
});
