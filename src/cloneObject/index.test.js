import cloneObject from './';

test('should export a function', () => {
  expect(cloneObject).toBeInstanceOf(Function);
});

test('should not reference original object', () => {
  const arr = ['monkey', 'lion'];

  expect(cloneObject(arr)).not.toBe(arr);
});
