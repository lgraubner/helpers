import toPercent from './';

test('should export a function', () => {
  expect(toPercent).toBeInstanceOf(Function);
});

test('should calculate absolute value', () => {
  expect(toPercent(0.2)).toBe(20);
  expect(toPercent(0)).toBe(0);
  expect(toPercent(4)).toBe(400);
  expect(toPercent(-0.33)).toBe(-33);
  expect(toPercent(-0.1252462)).toBe(-12.52462);
});
