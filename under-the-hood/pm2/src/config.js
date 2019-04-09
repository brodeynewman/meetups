import dotenv from 'dotenv';

/**
 * Parses root level .env into process.env
 */
dotenv.config();

/**
 * Application constants. Frozen to avoid modificaiton.
 */
export default Object.freeze({
  PORT: process.env.PORT || 8008,
  CRYPTO_ITERATION_COUNT: process.env.CRYPTO_ITERATION_COUNT || 10,
});
