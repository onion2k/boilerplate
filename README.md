# Webpack Boilerplate

A general boilerplate for apps that use webpack. Just for tinkering really.

## Usage

Fork the repo or download a ZIP of the project, and then use `npm i` to install.

## Included tools

| Tool | What it does
| --- | --- |
| [Webpack](https://webpack.js.org/) | The build tool
| [Webpack Dev Server](https://github.com/webpack/webpack-dev-server) | Build tool httpd for serving during development
| [Webpack HTML](https://github.com/jantimon/html-webpack-plugin) | Automatically populates index.html with JS and CSS files
| [Webpack Copy](https://github.com/webpack-contrib/copy-webpack-plugin) | Copies files from assets to build directory
| [Extract Text Plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) | Pulls out CSS and SCSS in to separate files
| [Webpack Subresource Integrity](https://github.com/waysact/webpack-subresource-integrity) | Adds subresource hashs on build
| [CSS Loader + Style Loader](https://github.com/webpack-contrib/css-loader) | Loads CSS files from imports
| [SASS Loader + node-sass](https://github.com/webpack-contrib/sass-loader) | Loads and compiles SCSS files from imports
| [CSSComb + csscomb-loader](http://csscomb.com/) | Makes CSS rules order consistent
| [Stylelint](https://stylelint.io/) | Lints SCSS and CSS files for coding style errors
| [ESLint](https://eslint.org/) | Lint JS code
| [ESLint Airbnb](https://github.com/airbnb/javascript) | Eslint rules for airbnb style
| [Worker Loader](https://github.com/webpack-contrib/worker-loader) | Loads imports as Worker scripts (eg window.worker())

## What isn't included

Notable things missing from the boilerplate are any sort of framework or commonly used libraries. If you want to use a framework then adding one should be a simple matter of using NPM to install it and (hopefully) it'll work right away. However, if it doesn't add an issue and I'll see if there's a fix.

## Using three.js

Three.js is awesome and I highly recommend it, but it's not going to work right away. The reason is because three.js includes some glsl shaders that webpack thinks are JavaScript, and things break. It's not hard to fix though - you just need to add raw-loader to include the shaders as raw text.

Install the loader using `npm i raw-loader`, and then add the following to the module rules section of the `webpack.config.js` file.

```javascript
module: {
    rules: [
        {
            test: /\.(glsl|frag|vert)$/,
            use: 'raw-loader'
        },
    ]
}
```

That's it. Now three.js should work.