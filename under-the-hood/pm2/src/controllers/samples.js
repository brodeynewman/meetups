import crypto from 'crypto';

/**
 * Gets something from somehwere...
 * @param {Object} request - request object from Express
 * @param {Object} response - response object from Express
 * @returns {Object} - response object
 */
export const doSomeExpensiveWork = (request, response) => {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => console.log('finished crypto'));

  return response.json({ succcess: true });
};
