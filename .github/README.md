![Footnote mark for the writer field](./writer-field-footnote.png)

# Custom Writer Field Marks (With Footnote Mark Example)

> Kirby doesn't support custom writer marks at the moment. This will probably be added in future versions. Until then, here's a guide.

This repository has two objectives:

- 1️⃣ Provide a patcher to modify Kirby's Panel.
- 2️⃣ Serve as a plugin boilerplate for extending the [writer field](https://getkirby.com/docs/reference/panel/fields/writer) with custom marks.

How does it work? The patcher simply extends the writer field marks object to include custom marks from the new global `window.panel.plugins.marks` property.

## Installation

> ℹ️ Since this repo is a plugin template, I recommend you fork it and include it manually into your `site/plugins` folder.

### Download

Download and copy this repository to `/site/plugins/kirby-writer-marks`.

### Git submodule

```
git submodule add https://github.com/johannschopplich/kirby-writer-marks.git site/plugins/kirby-writer-marks
```

## Setup

Before using the plugin (boilerplate), you will have to patch the Kirby Panel.

> ⚠️ Make sure to delete the `media/panel` folder after patching if you are running the patcher on an existing project.

### Plain

The patcher script itself is a Node script to modify Kirby's Panel [dist file](https://github.com/getkirby/kirby/blob/master/panel/dist/js/app.js). It will detect if the Panel has been patched before if run again.

The Composer setup (see below) is the preferred setup. If you don't use Composer, you can run run:

```bash
node site/plugins/kirby-writer-marks/scripts/patchKirbyPanel.cjs
```

Remember to run the patcher again when you have updated your Kirby instance with a new version!

### Composer

> ℹ️ An example setup may be found in the [`example`](../example) directory.

To automatically patch the Kirby Panel, add the following script your `composer.json`:

```json
{
  "scripts": {
    "post-update-cmd": [
      "node site/plugins/kirby-writer-marks/scripts/patchKirbyPanel.cjs"
    ]
  }
}
```

Then, run:

```bash
composer update
```

This will run the patcher each time Composer dependencies (like the Kirby CMS itself). Thus, no need for you to run the patcher manually!

## Panel Plugin

This plugin adds a custom **footnote mark**, which will create a `<article-footnote>` custom element. Styling included.

You can create custom plugins yourself. To get inspiration, head over to Kirby's official [writer marks](https://github.com/getkirby/kirby/tree/master/panel/src/components/Writer/Marks).

Custom marks are located in [`src/panel/Marks`](./src/panel/Marks) and initiate inside [`src/panel/index.js`](./src/panel/index.js).

### Development

> ℹ️ [kirbyup](https://github.com/johannschopplich/kirbyup) is used for building the Kirby Panel plugin.

Spin up the development server to watch your main script. You will have to refresh the Panel manually to see your new custom marks in the writer field.

```bash
npm run dev
```

### Production

Build the final Panel plugin:

```bash
npm run build
```

## License

[MIT](https://opensource.org/licenses/MIT)

It is discouraged to use this starterkit in any project that promotes racism, sexism, homophobia, animal abuse, violence or any other form of hate speech.
