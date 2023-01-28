/**
 * Transforms function into Immediately Invoked Function Expression.
 *
 * @param func - Function.
 * @returns - IIFE.
 */
export function iife(func: () => void): string {
  const code = [func.toString(), `${func.name}();`].join('');
  return `(function(){${code}})();`;
}
