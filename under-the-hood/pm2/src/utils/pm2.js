import io from '@pm2/io';

/**
 * Adding a counter to see how many requests we get
 * @returns {Object} - counter interface
 */
const counter = io.counter({
  name: 'Request Count',
  agg_type: 'sum',
});

/**
 * Gauges the amount of requests we get per second
 */
const meter = io.meter({
  name: 'req/sec',
  type: 'meter',
});

/**
 * Increments the prob on every request to get the request count
 * @param {Object} request - request object
 * @param {Object} response - response object
 * @param {function} next - fn to continue to 'next' middleware
 * @returns {void}
 */
export const countProbe = (request, response, next) => {
  counter.inc();
  next();
};

/**
 * Gets the amount of requests/sec
 * @param {Object} request - request object
 * @param {Object} response - response object
 * @param {function} next - fn to continue to 'next' middleware
 * @returns {void}
 */
export const markProbe = (request, response, next) => {
  meter.mark();
  next();
};
