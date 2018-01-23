import random from './';

test('should export a function', () => {
  expect(random).toBeInstanceOf(Function);
});

test('should return number', () => {
  expect(typeof random(1, 10)).toBe('number');
});

test('should generate random number', () => {
  expect(random(1, 9999)).not.toBe(random(1, 9999));
});
