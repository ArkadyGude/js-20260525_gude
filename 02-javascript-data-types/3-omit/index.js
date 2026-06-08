/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */

export const omit = (obj, ...fields) => {
  if (obj == null || typeof obj !== 'object') {
    return {};
  }

  const validFields = fields.filter(field => typeof field === 'string');
  
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !validFields.includes(key))
  );
};
