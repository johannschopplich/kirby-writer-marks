function initCustomMarks() {
  if (!window.panel.plugins.marks) {
    window.panel.plugins.marks = [];
  }
}

/**
 * Registers a custom writer mark
 *
 * @param {object} data Key value pair containing mark name and class
 */
export function registerCustomMark(data) {
  initCustomMarks();

  // Custom marks need to be wrapped in a function
  window.panel.plugins.marks.push(() => data);
}
