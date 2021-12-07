import writerMarks from "./plugins/writerMarks";
import Footnote from "./Marks/Footnote";

window.panel.plugin("johannschopplich/kirby-writer-marks", {
  use: [writerMarks],
  thirdParty: {
    marks: {
      // Import custom marks from other plugins
      ...(window.panel.plugins.thirdParty.marks || {}),

      // Provide class, not an instance of it
      footnote: Footnote,
    },
  },
});
