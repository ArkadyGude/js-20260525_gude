/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

export function sortStrings(arr, param = 'asc') {
  if (!Array.isArray(arr)) return [];

  const collator = new Intl.Collator(['ru-RU', 'en-US'], { sensitivity: 'case', caseFirst: 'upper' });
  const directions = { asc: 1, desc: -1 };
  const dir = directions[param] ?? 1;

  return [...arr].sort((a, b) => dir * collator.compare(a, b));
}
