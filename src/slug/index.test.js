import slug from './';

test('should export a function', () => {
  expect(slug).toBeInstanceOf(Function);
});

test('should lowercase all characters', () => {
  const str = 'ABC';

  expect(slug(str)).toBe('abc');
});

test('should trim string', () => {
  const str = ' abc   ';

  expect(slug(str)).toBe('abc');
});

test('should replace umlauts', () => {
  const str = 'äöüß';

  expect(slug(str)).toBe('aeoeuess');
});

test('should replace whitespace characters', () => {
  const str = 'i like monkeys';

  expect(slug(str)).toBe('i-like-monkeys');
});

test('should remove non-word characters', () => {
  const str = 'hello!';

  expect(slug(str)).toBe('hello');
});

test('should replace multiple dashes with one', () => {
  const str = 'hello--world';

  expect(slug(str)).toBe('hello-world');
});

test('should apply all transformations', () => {
  const str = ' Österreich- ist toll!  ';

  expect(slug(str)).toBe('oesterreich-ist-toll');
});
