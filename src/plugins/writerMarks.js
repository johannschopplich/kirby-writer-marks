export default function (Vue) {
  const thirdParty = window.panel.plugins.thirdParty;
  if (thirdParty.__marksInitialized) return;

  const customMarks = thirdParty.marks;
  if (!customMarks) return;

  const original = Vue.component("k-writer");

  Vue.component("k-writer", {
    extends: original,
    methods: {
      createMarks() {
        const originalMarks = original.options.methods.createMarks
          .call(this)
          .filter(({ name }) => !Object.keys(customMarks).includes(name));

        const marks = Object.entries(customMarks).reduce(
          (acc, [key, Constructor]) => {
            acc[key] = new Constructor();
            return acc;
          },
          {}
        );

        return [...originalMarks, ...this.filterExtensions(marks, this.marks)];
      },
    },
  });

  thirdParty.__marksInitialized = true;
}
