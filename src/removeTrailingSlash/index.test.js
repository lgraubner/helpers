import removeTrailingSlash from './';

test('should export a function', () => {
  expect(removeTrailingSlash).toBeInstanceOf(Function);
});

test('should remove trailing slash from string', () => {
  expect(removeTrailingSlash('foo/')).toBe('foo');
  expect(removeTrailingSlash('foo/////')).toBe('foo');
  expect(removeTrailingSlash('/foo/bar/')).toBe('/foo/bar');
});
