# Webpack Boilerplate

A general boilerplate for apps that use webpack. Just for tinkering really.

# Usage

Fork the repo or download a ZIP of the project, and then use `npm i` to install.

# Included tools

| Tool | What it does |
| --- | --- |
| Webpack | The build tool
| Webpack Dev Server | Build tool httpd for serving during development
| Webpack HTML | Automatically populates index.html with JS and CSS files 
| Webpack Copy | Copies files from assets to build directory
| CSS Loader + Style Loader | Loads CSS files from imports
| SASS Loader + node-sass | Loads and compiles SCSS files from imports
| Worker Loader | Loads imports as Worker scripts (eg window.worker() )
| Extract Text Plugin | Pulls out CSS and SCSS in to separate files
| Webpack Subresource Integrity | Adds subresource hashs on build
| Stylelint | Lints SCSS and CSS files for coding style errors
| ESLint | Lint JS code
| ESLint Airbnb | Eslint rules for airbnb style
| ESLint Prettier | Eslint rules for prettier style

# Switching ESLint rules

Swap `"extends": "prettier"` to `"extends": "airbnb"` to use the Airbnb style.
