import noop from './';

test('should export a function', () => {
  expect(noop).toBeInstanceOf(Function);
});
