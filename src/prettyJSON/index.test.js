import prettyJSON from './';

test('should export a function', () => {
  expect(prettyJSON).toBeInstanceOf(Function);
});

test('should pretty print json string', () => {
  const obj = {
    animal: 'monkey',
    num: 2,
  };

  expect(prettyJSON(obj)).toBe(JSON.stringify(obj, null, 2));
});
