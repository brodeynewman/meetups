import io from '@pm2/io';

/**
 * Adding a counter to see how many requests we get
 * @returns {Object} - counter interface
 */
const counter = io.counter({
  name : 'Request Count',
  agg_type : 'sum'
});

/**
 * Gauges the amount of requests we get per second
 */
const meter = io.meter({
  name: 'req/sec',
  type: 'meter',
});

export const countProbe = (request, response, next) => {
  counter.inc();
  next();
}

export const markProbe = (request, response, next) => {
  meter.mark();
  next();
}