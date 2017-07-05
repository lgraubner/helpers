import { stripTags } from '../stripTags';

test('should default export a function', () => {
  expect(stripTags).toBeInstanceOf(Function);
});

test('remove tags', () => {
  const str = '<p>Hello <br />World.</p>';

  expect(stripTags(str)).toBe('Hello World.');
});
