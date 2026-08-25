const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(text, key) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }

    const result = this.cipher(text, key, 1);

    return this.isDirect
      ? result
      : result.split('').reverse().join('');
  }

  decrypt(text, key) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }

    const result = this.cipher(text, key, -1);

    return this.isDirect
      ? result
      : result.split('').reverse().join('');;
  }

  cipher(text, key, direction) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let keyIndex = 0;

    return text
      .toUpperCase()
      .split('')
      .map((char) => {
        const charIndex = alphabet.indexOf(char);

        if (charIndex === -1) {
          return char;
        }

        const keyChar = key[keyIndex % key.length].toUpperCase();
        const keyCharIndex = alphabet.indexOf(keyChar);

        keyIndex += 1;

        return alphabet[
          (charIndex + direction * keyCharIndex + 26) % 26
        ];
      })
      .join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
