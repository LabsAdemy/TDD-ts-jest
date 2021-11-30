// A flow based scenario

/*
 * the game should generate a word of random length between 5 an 10
 * the game should give a clue of dashes of word length at start
 * the game should allow the user to guess a letter
 * if the letter is in the word, the game should replace the dashes with the letter
 * if the letter is not in the word, the game should not replace the dashes
 * this game engine is not to be operated directly by de end user
 */

import { Hangman } from './hangman';

describe('the Hangman game engine', () => {
  let sutHangman: Hangman;
  let wordToGuess: string;
  beforeAll(() => {
    sutHangman = new Hangman();
    wordToGuess = sutHangman.generateWord();
  });
  it('should generate a word of random length between 5 an 10', () => {
    const actual: number = wordToGuess.length;
    expect(actual).toBeGreaterThanOrEqual(5);
    const actual10: boolean = wordToGuess.length <= 10;
    expect(actual10).toBeTruthy();
  });
  it('should give a clue of dashes of word length at start', () => {
    const actual: string = sutHangman.getClue();
    const expected = '_'.repeat(wordToGuess.length);
    expect(actual).toStrictEqual(expected);
  });
  it('should give a new clue replace dashes with guessed letters', () => {
    sutHangman.secretWord = 'vitae';
    const inputClue = sutHangman.getClue();
    const inputLetter = 'e';
    const actual = sutHangman.getClue(inputClue, inputLetter);
    const expected = '____e';
    expect(actual).toStrictEqual(expected);
  });
  it('should give a new clue with dashes if no present', () => {
    sutHangman.secretWord = 'vitae';
    const inputClue = sutHangman.getClue();
    const inputLetter = 'b';
    const actual = sutHangman.getClue(inputClue, inputLetter);
    const expected = '_____';
    expect(actual).toStrictEqual(expected);
  });
  it('should give a new clue replace dashes with guessed letters multiple times', () => {
    sutHangman.secretWord = 'vitae';
    const inputClue = sutHangman.getClue();
    const inputLetter1 = 'e';
    const actual1 = sutHangman.getClue(inputClue, inputLetter1);
    const inputLetter2 = 'a';
    const actual2 = sutHangman.getClue(actual1, inputLetter2);
    const expected = '___ae';
    expect(actual2).toStrictEqual(expected);
  });
});
