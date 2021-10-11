import { registerCustomMark } from "./setup";
import Footnote from "./Marks/Footnote";
import "./index.css";

registerCustomMark({
  footnote: new Footnote(),
});
