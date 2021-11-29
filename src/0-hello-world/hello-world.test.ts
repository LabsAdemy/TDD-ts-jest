import { getHelloWorld } from './hello-world';

describe('the getHelloWorld function', () => {
  it('should return "Hello World!"', () => {
    const actual = getHelloWorld();
    const expected = 'Hello World!';
    expect(actual).toBe(expected);
  });
});
