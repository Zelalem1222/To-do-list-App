const { add } = require('./src/index');

test('add list Item' , () => {
  expect(add()).toBe('hello');
})