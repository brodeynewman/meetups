const fs = require('fs');
const https = require('https');
const crypto = require('crypto');

const start = Date.now();

/**
 * Makes a request to Google to demonstrate HTTPS request via OS.
 * @returns {void}
 */
const makeRequest = () => {
 https.request('https://www.google.com', (res) => {
   res.on('data', () => {})
   res.on('end', () => {
     console.log('Finished request: ', Date.now() - start);
   });
 }).end();
};

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

/**
 * Reads from a file on the OS.
 * Demonstrates filling the threadpool.
 */
const readFromFile = () => {
 fs.readFile('example-three.js', 'utf8', () => {
   console.log('Finished file read: ', Date.now() - start);
 });
};

makeRequest();
readFromFile();
callCrypto();
callCrypto();
callCrypto();
callCrypto();