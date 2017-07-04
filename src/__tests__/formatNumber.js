import formatNumber from '../formatNumber';

test('should default export a function', () => {
  expect(formatNumber).toBeInstanceOf(Function);
});

test('should return string', () => {
  expect(typeof formatNumber(1)).toBe('string');
});

test('should format with given precision', () => {
  expect(formatNumber(1.23, 1)).toBe('1,2');
});

test('should format with given decimal delimiter', () => {
  expect(formatNumber(1.23, 2, '_')).toBe('1_23');
});

test('should format with given thousands delimiter', () => {
  expect(formatNumber(2000, null, null, '_')).toBe('2_000');
});
