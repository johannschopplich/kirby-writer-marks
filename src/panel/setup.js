/**
 * Registers a custom writer mark
 *
 * @param {Function} data Fn returning key (mark name) value (class instance) pair
 */
export function registerCustomMark(data) {
  if (!window.panel.plugins.marks) {
    window.panel.plugins.marks = [];
  }

  window.panel.plugins.marks.push(data);
}
