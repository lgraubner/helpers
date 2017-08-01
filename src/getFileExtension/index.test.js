import getFileExtension from './';

test('should export a function', () => {
  expect(getFileExtension).toBeInstanceOf(Function);
});

test('should extract file extension from string', () => {
  expect(getFileExtension('.gitignore')).toBe('');
  expect(getFileExtension('file')).toBe('');
  expect(getFileExtension('image.png')).toBe('png');
  expect(getFileExtension('another.image.jpg')).toBe('jpg');
});
