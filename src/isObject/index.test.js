import isObject from './';

test('should export a function', () => {
  expect(isObject).toBeInstanceOf(Function);
});

test('should detect objects correctly', () => {
  expect(isObject({})).toBeTruthy();
  expect(isObject({ foo: 'bar' })).toBeTruthy();
  expect(isObject(Object.create(null))).toBeTruthy();
  expect(isObject(Object.create(Object.prototype))).toBeTruthy();
  expect(isObject(Object.create({}))).toBeTruthy();
  expect(isObject(1)).toBeFalsy();
  expect(isObject([])).toBeFalsy();
  expect(isObject(['foo', 'bar'])).toBeFalsy();
  expect(isObject(null)).toBeFalsy();
  expect(isObject(new Function())).toBeFalsy();
  expect(isObject(/asdgs/)).toBeFalsy();
  expect(isObject(new Date())).toBeFalsy();
});
