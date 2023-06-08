/**
 * Parse a value as a boolean.
 *
 * @param {*} value
 * @param {boolean} [isCaseSensitive=false]
 * @return {boolean}
 */
function parseAsBoolean(value, isCaseSensitive = false) {
  const truthy = ['true', '1', 'yes', 'on', 'enabled'];
  const caseSensitive = typeof isCaseSensitive === 'boolean' ? isCaseSensitive : false;

  if (typeof value === 'string') {
    return caseSensitive ? truthy.includes(value) : truthy.includes(value.toLowerCase());
  }

  if (typeof value === 'number') {
    return value === 1;
  }

  if (typeof value !== 'boolean') {
    return false;
  }

  return Boolean(value);
}

export { parseAsBoolean };
