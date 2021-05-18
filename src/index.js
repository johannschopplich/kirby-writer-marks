import Footnote from './Writer/Marks/Footnote'

window.panel.plugins.marksResolver = () => ({
  footnote: new Footnote()
})
