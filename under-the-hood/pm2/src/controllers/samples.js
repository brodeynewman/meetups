/**
 * Business logic exists in here
 */

import debug from 'debug';
import crypto from 'crypto';

import config from '../config';

const log = debug('app:controllers:sample');

const handleCryptoResponse = () => {
  console.log('finished with crypto');
};

/**
 * Gets something from somehwere...
 * @param {Object} request - request object from Express
 * @param {Object} response - response object from Express
 * @returns {Object} - response object
 */
export const doSomeExpensiveWork = (request, response) => {
  log('Running expensive functions...');

  for (let i = 0; i < config.CRYPTO_ITERATION_COUNT; i++) {
    console.log('lol');
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', handleCryptoResponse);
  }

  return response.json({ succcess: true });
};
