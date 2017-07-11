import { onReady } from '../onReady';

test('should export a function', () => {
  expect(onReady).toBeInstanceOf(Function);
});

test('should execute callback if readyState is not loading', () => {
  const cb = jest.fn();
  onReady(cb);
  expect(cb).toHaveBeenCalled();
});
