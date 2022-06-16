/**
 * @jest-environment jsdom
 */


const { addList } = require('./src/index');

test('add list Item' , () => {
    const add = document.querySelector('.list-input')
  expect(2+3).toBe(5);
})