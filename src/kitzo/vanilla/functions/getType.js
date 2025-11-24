function getType(value) {
  if (value === null) return 'null';

  if (Array.isArray(value)) return 'array';

  if (value instanceof Date) return 'date';

  if (value instanceof RegExp) return 'regexp';

  if (typeof value === 'object') return 'object';

  return typeof value;
}

export default getType;
