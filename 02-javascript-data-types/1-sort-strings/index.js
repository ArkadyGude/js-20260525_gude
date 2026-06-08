/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

export function sortStrings(arr, param = 'asc') {
  if (!Array.isArray(arr)) return [];
  if (arr.length === 0) return [];
  
  const validParams = ['asc', 'desc'];
  if (!validParams.includes(param)) {
    throw new Error(`Invalid param "${param}". Expected "asc" or "desc".`);
  }

  const filteredArr = arr.filter(item => item != null && typeof item === 'string');
  if (filteredArr.length === 0) return [];

  const result = [...filteredArr];

  const collator = new Intl.Collator('ru-RU', { sensitivity: 'case', caseFirst: 'upper' });
  
  if (param === 'desc') {
    result.sort((a, b) => collator.compare(b, a));
  } else {
    result.sort((a, b) => collator.compare(a, b));
  }

  return result;
}
