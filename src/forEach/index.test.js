import forEach from './';

test('should export a function', () => {
  expect(forEach).toBeInstanceOf(Function);
});

test('should iterate over array like lists', () => {
  const arr = ['monkey', 'lion'];

  const cb = jest.fn();
  forEach(arr, cb);
  expect(cb).toHaveBeenCalledTimes(2);
  expect(cb).toHaveBeenLastCalledWith('lion', 1, arr);
});
