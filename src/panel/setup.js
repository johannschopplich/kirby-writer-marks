/**
 * Registers a custom writer mark
 *
 * @param {string} name Mark name
 * @param {Function} fn Mark constructor
 */
export function registerCustomMark(name, fn) {
  if (!window.panel.plugins.marks) {
    window.panel.plugins.marks = [];
  }

  window.panel.plugins.marks.push([name, fn]);
}
