import pipe from './';

test('should export a function', () => {
  expect(pipe).toBeInstanceOf(Function);
});

test('should execute all piped functions', () => {
  const double = i => i * 2;
  const addTen = i => i + 10;
  const calc = pipe(double, addTen);
  expect(calc(5)).toBe(20);
});
