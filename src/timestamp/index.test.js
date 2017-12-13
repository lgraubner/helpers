import timestamp from './';

test('should export a function', () => {
  expect(timestamp).toBeInstanceOf(Function);
});

test('return timestamp', () => {
  const ts = timestamp();

  expect(typeof ts).toBe('number');
});
