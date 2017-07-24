import $ from './';

test('should export a bound function', () => {
  expect(typeof $).toBe('function');
});
