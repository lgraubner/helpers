import on from './';

test('should export a function', () => {
  expect(on).toBeInstanceOf(Function);
});

test('should execute callback if readyState is not loading', () => {
  const el = {
    addEventListener: jest.fn(),
  };

  const cb = () => {};
  on([el], 'click', cb, true);
  expect(el.addEventListener).toHaveBeenCalledWith('click', cb, true);
});
