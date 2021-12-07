import Mark from "./Writer/Mark";

export default class Footnote extends Mark {
  get button() {
    return {
      icon: "quote",
      label: "Footnote",
    };
  }

  commands() {
    return () => this.toggle();
  }

  get name() {
    return "footnote";
  }

  get schema() {
    return {
      parseDOM: [{ tag: "article-footnote" }],
      toDOM: (node) => [
        "article-footnote",
        {
          ...node.attrs,
        },
        0,
      ],
    };
  }
}
