import basename from './';

test('should export a function', () => {
  expect(basename).toBeInstanceOf(Function);
});

test('should return basename', () => {
  const path = 'this/is/a/path';
  expect(basename(path)).toBe('path');
});

test('should accept custom seperator', () => {
  const path = 'this.is.a.path';
  expect(basename(path, '.')).toBe('path');
});
