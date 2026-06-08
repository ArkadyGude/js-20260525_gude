/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */

export const pick = (obj, ...fields) => {
  if (obj == null || typeof obj !== 'object') {
    return {};
  }
  
  if (fields.length === 0) {
    return {};
  }

  const validFields = fields.filter(field => typeof field === 'string');
  if (validFields.length === 0) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => validFields.includes(key))
  );
};
