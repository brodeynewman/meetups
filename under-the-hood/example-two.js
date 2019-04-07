const crypto = require('crypto');

const start = Date.now();

/**
 * Invokes the 'crypto' module.
 * Demonstrating NodeJS standard library binding between JS & C++;
 * @returns {void}
 */
const callCrypto = () => {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('Crypto: ', Date.now() - start);
  });
}

callCrypto();
callCrypto();
callCrypto();
callCrypto();
callCrypto();
