import { cloneArray } from '../cloneArray';

test('should export a function', () => {
  expect(cloneArray).toBeInstanceOf(Function);
});

test('should not reference original array', () => {
  const arr = ['monkey', 'lion'];

  expect(cloneArray(arr)).not.toBe(arr);
});
