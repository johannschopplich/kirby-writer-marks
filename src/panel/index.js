import { registerCustomMark } from "./setup";
import Footnote from "./Marks/Footnote";
import "./index.css";

registerCustomMark(
  "footnote",
  // Provide raw class, not an instance of it
  Footnote
);
