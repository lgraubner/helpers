import round from './';

test('should export a function', () => {
  expect(round).toBeInstanceOf(Function);
});

test('should return number', () => {
  expect(typeof round(1.2)).toBe('number');
});

test('should accept precision argument', () => {
  expect(round(3.1415, 3)).toBe(3.142);
});
