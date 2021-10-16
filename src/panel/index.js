import { registerCustomMark } from "./setup";
import Footnote from "./Marks/Footnote";
import "./index.css";

// Marks have to be wrapped in a function
registerCustomMark(() => ({
  footnote: new Footnote(),
}));
