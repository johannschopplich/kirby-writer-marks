![Footnote mark for the writer field](./writer-field-footnote.png)

# Custom Writer Field Marks (With Footnote Mark Example)

> Note: Kirby doesn't support custom writer marks at the moment. This will probably be added in future versions. Until then, here's a guide.

## Setup

### Composer

> ℹ️ An example setup may be found in the [`example`](../example) directory.

To automatically patch the Kirby panel to support custom writer marks, add the following script your `composer.json` and run `composer update`:

```json
{
  "scripts": {
    "post-update-cmd": [
      "node ./patchKirbyPanel.js"
    ]
  }
}
```

The patcher script itself is a Node script, which will bail if the Panel bundle has been patched already.

If you don't use a Composer setup, you can just run `node ./patchKirbyPanel.js` as well. But remember to patch again when you have updated your Kirby instance.

## Usage

### Custom Marks

You may want to use one of [Kirby's writer marks](https://github.com/getkirby/kirby/tree/master/panel/src/components/Writer/Marks) as a base. 

Save it in [`src/Writer/Marks`](../src/Writer/Marks) and initiate the custom mark class inside [`src/index.js`](../src/index.js).

This setup adds a a custom **footnote mark**, which will create a `<article-footnote>` custom element. Styling included.

### Development

Spin up the development server to watch your main script. It will re-bundle after changes. You will have to refresh the Panel manually – it will then use the latest script version.

```bash
npm run dev
```

### Production

Build the optimized panel plugin:

```bash
npm run build
```

## License

[MIT](https://opensource.org/licenses/MIT)

It is discouraged to use this starterkit in any project that promotes racism, sexism, homophobia, animal abuse, violence or any other form of hate speech.
