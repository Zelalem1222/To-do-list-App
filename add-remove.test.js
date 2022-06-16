const { addList } = require('./src/index');

test('add list Item' , () => {
  expect(addList()).toBe('hello');
})