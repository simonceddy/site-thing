/**
 * Create a clock modulator object
 * @param {number} tempo Clock rate
 * @param {number} divisor Divisor
 * @returns {object}
 */
export function makeClockMod(tempo, divisor = 1) {
  const ms = ((60 / tempo) * 1000) / (divisor === 0 ? 1 : divisor);
  return { ms };
}
