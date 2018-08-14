import deepMerge from './';

describe('#deepMerge', () => {
  test('should merge two objects', () => {
    const target = { foo: { bar: 'baz' } };
    const source = { foo: { bar: 'lol' }, num: 2 };

    const merged = deepMerge(target, source);
    expect(merged).toEqual({
      foo: { bar: 'lol' },
      num: 2
    });

    expect(merged === target).toBeTruthy();
  });
});
