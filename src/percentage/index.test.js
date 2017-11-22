import percentage from './';

test('should export a function', () => {
  expect(percentage).toBeInstanceOf(Function);
});

test('should calculate absolute value', () => {
  expect(percentage(0.2)).toBe('20%');
  expect(percentage(0)).toBe('0%');
  expect(percentage(4)).toBe('400%');
  expect(percentage(-0.33)).toBe('-33%');
  expect(percentage(-0.1252462)).toBe('-12.52462%');
});
