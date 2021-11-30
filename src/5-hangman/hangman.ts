export class Hangman {
  secretWord = 'vitae';
  generateWord(): string {
    return this.secretWord;
  }
  getClue(currentClue = '', guessingLetter = ''): string {
    if (currentClue === '') {
      return '_'.repeat(this.secretWord.length);
    }
    let newClue = '';
    for (let i = 0; i < this.secretWord.length; i++) {
      if (this.secretWord[i] === guessingLetter) {
        newClue += guessingLetter;
      } else {
        newClue += currentClue[i];
      }
    }
    return newClue;
  }
}
