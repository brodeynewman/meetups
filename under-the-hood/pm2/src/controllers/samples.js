import _ from 'lodash';
import crypto from 'crypto';

/**
 * Gets something from somehwere...
 * @param {Object} request - request object from Express
 * @param {Object} response - response object from Express
 * @returns {void}
 */
export const destroyMemory = (request, response) => {
  for (let i = 0; i < 10000; i++) {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', _.noop);
  }

  return response.json({ succcess: true });
};

/**
 * Gets something from somehwere...
 * @param {Object} request - request object from Express
 * @param {Object} response - response object from Express
 * @returns {Object} - response object
 */
export const doSomeExpensiveWork = (request, response) => {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => console.log('finished hashing!'));

  return response.json({ succcess: true });
};
