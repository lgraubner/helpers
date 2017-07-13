import off from './';

test('should export a function', () => {
  expect(off).toBeInstanceOf(Function);
});

test('should execute callback if readyState is not loading', () => {
  const el = {
    removeEventListener: jest.fn(),
  };

  const cb = () => {};
  off([el], 'click', cb, true);
  expect(el.removeEventListener).toHaveBeenCalledWith('click', cb, true);
});
