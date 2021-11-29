import { getLetterCount } from './letter-count';
describe('the getLetterCount function', () => {
  it('should return one for each letter of a simple word (with no repeated letters)', () => {
    expect(getLetterCount('cat')).toStrictEqual({ c: 1, a: 1, t: 1 });
  });
  it('should return one for each letter of a complex word (with repeated letters)', () => {
    expect(getLetterCount('Mississippi')).toStrictEqual({
      M: 1,
      i: 4,
      s: 4,
      p: 2,
    });
  });
  it('should return  of an empty word', () => {
    expect(getLetterCount('')).toStrictEqual({});
  });
});
