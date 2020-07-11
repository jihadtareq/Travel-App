const sum = require('./server');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

describe('Test, the function "listening()" should exist' , () => {
    test('It should return true', async () => {
        expect(sum).toBeDefined();
    });
 });

 describe('Test "listening()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof sum).toBe("function");
      });
 });