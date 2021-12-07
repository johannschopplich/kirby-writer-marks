export default function (Vue) {
  const parent = window.panel.plugins.thirdParty;
  if (parent.__marksInitialized) return;

  const customMarks = parent.marks;
  if (!customMarks) return;

  const original = Vue.component("k-writer");

  Vue.component("k-writer", {
    extends: original,
    methods: {
      createMarks() {
        let originalMarks = original.options.methods.createMarks.call(this);

        if (!originalMarks) return [];
        if (!originalMarks.length) {
          console.warn(
            "Custom marks could not be added to the writer instance. At least one original mark has to be enabled."
          );
          return originalMarks;
        }

        originalMarks = originalMarks.filter(
          ({ name }) => !Object.keys(customMarks).includes(name)
        );

        const marks = Object.entries(customMarks).reduce(
          (acc, [key, Constructor]) => {
            acc[key] = new Constructor();
            return acc;
          },
          {}
        );

        return [
          ...(originalMarks || []),
          ...(this.filterExtensions(marks, this.marks) || []),
        ];
      },
    },
  });

  parent.__marksInitialized = true;
}
