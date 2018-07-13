# Barte-npm-der

Awful name, great tool.

## Purpose
Bartender initially started as Grunt task runner for front-end development, focusing on CSS compiling and JS concatenation.

It since has evolved to Gulp and now to pure npm and grown in size to include CSS validation, linting, and compiling, image/SVG minification, and JS validation, linting, and concatenating.

Below is a list of the tools in play with the current version of Bartender.

## Plugins
### Styles
- [postcss-cli](https://www.npmjs.com/package/postcss-cli)
	- [autoprefixer](https://www.npmjs.com/package/autoprefixer)
	- [postcss-critical-css](https://www.npmjs.com/package/postcss-critical-css)
	- [postcss-css-properties](https://www.npmjs.com/package/postcss-custom-properties)
	- [postcss-easy-import](https://www.npmjs.com/package/postcss-easy-import)
	- [postcss-nested](https://www.npmjs.com/package/postcss-nested)
	- [cssnano](https://www.npmjs.com/package/cssnano)
- [stylelint](https://www.npmjs.com/package/stylelint)

### Scripts
- [eslint](https://www.npmjs.com/package/eslint)
- [babel-cli](https://www.npmjs.com/package/babel-cli)

### Assets
- [imagemin-cli](https://www.npmjs.com/package/imagemin-cli)


## Commands
`$ npm run scripts`
Scripts will run _eslint_ and _babel_ on the JS folder. 

`$ npm run styles`
Styles runs stylelint, and if passing, the core PostCSS CLI and it's attached plugins.

`$ npm run assets`
Runs _imagemin_ on all image and SVG assets.

`$ npm run watch`
Creates parallel watch tasks to watch for any changes to CSS, JS, or asset files. On change, will run the appropriate script from above.

`$ npm run build`
Runs through scripts, styles, and assets, without the watch task.